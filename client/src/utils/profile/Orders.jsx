import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderList from "./OrderList";

const Orders = ({ orders }) => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  });
  return (
    <div>
      {orders.map((order) => (
        <OrderList key={order._id} {...order} />
      ))}
    </div>
  );
};

export default Orders;
