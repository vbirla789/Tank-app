import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import OrderList from "./OrderList";

const Orders = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderList key={order._id} {...order} />
      ))}
    </div>
  );
};

export default Orders;
