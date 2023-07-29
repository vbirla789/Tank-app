import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { getTotals } from "../redux/cartReducer";

import { BsFillCartDashFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { clearErrors, createOrder } from "../redux/Action/orderAction";

const Cart = ({ checkoutHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products);
  const shippingInfo = useSelector((state) => state.cart.shippingInfo);
  const { error } = useSelector((state) => state.newOrder);

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const order = {
    shippingInfo,
    orderItems: products,
    itemsPrice: totalAmount,
    taxPrice: 1000,
    shippingPrice: 1000,
    totalPrice: 3000,
  };

  // console.log(order);

  const handleCheckout = () => {
    if (isAuthenticated) {
      checkoutHandler(totalAmount);
      // dispatch(createOrder(order));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getTotals());
  }, [products, dispatch, alert, error]);

  return (
    <nav
      className="left-0  
     color flex flex-col gap-5 md:gap-0 opacity-100 absolute top-0 py-6 px-2 transition-all duration-500 w-[60%] h-[120vh] mt-0 font-semibold text-xl md:w-[72%]"
    >
      <div className="flex gap-4 items-center ml-5 text-3xl mb-5">
        <BsFillCartDashFill />
        <h1>Cart</h1>
      </div>
      {products?.map((item, i) => (
        <CartItems item={item} key={i} />
      ))}
      <div className="relative">
        <div className="top-[30vh] absolute flex items-center flex-col w-full lg:top-[50vh]">
          <div className="flex justify-between w-[90%] ">
            <h1>Subtotal</h1>

            <span>₹ {totalAmount}</span>
          </div>
          <div className="flex w-full ">
            <button
              className="bg-slate-900 text-white px-8 py-1 mb-0 mt-5 rounded-full mx-auto"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Cart;
