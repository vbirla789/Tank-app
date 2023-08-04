import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/Action/orderAction";

const OrderData = ({
  order: { _id, orderStatus, orderItems, totalPrice, paidAt },
}) => {
  const dispatch = useDispatch();
  const [showFullOrderId, setShowFullOrderId] = useState(false);
  const [showorderStatus, setShowOrderStatus] = useState(false);

  const deleteOrderHandler = (_id) => {
    dispatch(deleteOrder(_id));
  };

  const handleOrderIdClick = () => {
    setShowFullOrderId(!showFullOrderId);
  };
  const handleOrderStatusClick = () => {
    setShowOrderStatus(!showorderStatus);
  };

  const convertToDateString = (timestamp) => {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so we add 1 and pad with leading zeros if necessary
    const day = String(dateObject.getDate()).padStart(2, "0"); // Day of the month, padded with leading zeros if necessary

    return `${year}-${month}-${day}`;
  };

  const date = convertToDateString(paidAt);

  // Function to calculate 6 months from the paidAt date
  const sixMonthsFromPaidAt = new Date(paidAt);
  sixMonthsFromPaidAt.setMonth(sixMonthsFromPaidAt.getMonth() + 6);
  const warrantyDate = convertToDateString(sixMonthsFromPaidAt);

  return (
    <div key={_id} className="mb-4">
      <div className="flex justify-around items-center bg-slate-200 mb-2 rounded-3xl px-3 py-2 ">
        <span onClick={handleOrderIdClick}>
          {showFullOrderId ? _id : _id.substring(0, 8)}
        </span>
        <h1 onClick={handleOrderStatusClick}>
          {showorderStatus ? "delivered" : orderStatus}
        </h1>
        <div className="flex flex-col gap-2">
          {orderItems.map((order) => (
            <div key={order._id}>
              <h1>{order.title}</h1>
              <p>Item Quantity: {order.cartQuantity}</p>
            </div>
          ))}
        </div>
        <p>₹{totalPrice}</p>
        <div className="flex gap-2">
          <AiFillDelete onClick={() => deleteOrderHandler(_id)} />
          {/* <AiFillEdit /> */}
        </div>
      </div>
      <div className="flex justify-around">
        <h1>{date}</h1>
        <h1>warranty till: {warrantyDate}</h1>
      </div>
    </div>
  );
};

export default OrderData;
