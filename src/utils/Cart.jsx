import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="absolute z-100 color opacity-100 py-5 px-5 top-[12vh] lg:top-[14vh] lg:right-4 right-4 w-[60vh] flex flex-col gap-10 min-h-[80vh] rounded-lg md:w-[45vh]">
      <h1>Products in your cart</h1>
      {products?.map((item, i) => (
        <CartItems item={item} key={i} />
      ))}
      <div className="absolute , bottom-10">
        <div className="flex justify-between w-[60vh]">
          <h1>Subtotal</h1>
          <span className="mr-10">₹400</span>
        </div>
        <div>
          <button className="bg-slate-900 text-white px-4 py-1 mb-0 mt-5 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
