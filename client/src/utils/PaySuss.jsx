import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { createOrder } from "../redux/Action/orderAction";
import { resetCart } from "../redux/cartReducer";

const PaySuss = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  const products = useSelector((state) => state.cart.products);
  const shippingInfo = useSelector((state) => state.cart.shippingInfo);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  const order = {
    shippingInfo,
    orderItems: products,
    itemsPrice: totalAmount,
    taxPrice: 1000,
    shippingPrice: 1000,
    totalPrice: 3000,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrder(order));
    dispatch(resetCart());
  }, [dispatch]);
  return (
    <div className="flex items-center justify-center min-h-[100vh] flex-col">
      <h1 className="text-2xl font-semibold">Order Successfull</h1>
      <h1 className="text-slate-600">Reference No. {referenceNum}</h1>
    </div>
  );
};

export default PaySuss;
