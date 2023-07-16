import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { getTotals } from "../redux/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  // console.log(products);

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <div className="absolute z-100 color py-5 px-3 top-[12vh] lg:top-[14vh] lg:right-4 right-4 w-[60vh] flex flex-col gap-10 min-h-[80vh] rounded-xl md:w-[40vh] md:min-h-[60vh]">
      <h1>Products in your cart</h1>
      {products?.map((item, i) => (
        <CartItems item={item} key={i} />
      ))}
      <div className="relative">
        <div className="top-[30vh] absolute flex items-center flex-col w-full lg:top-[80%] sm:top-[25vh]">
          <div className="flex justify-between w-[90%]">
            <h1>Subtotal</h1>
            {/* {products.map((val) => (
              <span>{val.price}</span>
            ))} */}
            <span>{totalAmount}</span>
          </div>
          <div className="flex w-full items-start">
            <button className="bg-slate-900 text-white px-4 py-1 mb-0 mt-5 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
