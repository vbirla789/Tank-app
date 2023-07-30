import React from "react";
import { NavLink } from "react-router-dom";

const OrderList = ({ _id, orderItems, orderStatus }) => {
  return (
    <div
      className=" color flex flex-col  gap-5 opacity-100 absolute top-0 right-0 py-[5vh] px-4 transition-all duration-500 w-[50%] sm:w-[100%] h-[100vh] mt-0 font-semibold text-xl "
      key={_id}
    >
      <h1 className="text-4xl">Orders</h1>
      <div key="">
        <div className="flex justify-between items-center bg-[#FFFFFF1A] rounded-md px-2 py-3 lg:mb-2">
          {orderItems.map((val, i) => (
            <div className="flex flex-col items-center justify-center gap-2">
              <NavLink>
                <img src={val.img} className="h-[50px] w-[50px]" />
              </NavLink>

              <p className="text-center text-base">{val.title}</p>
            </div>
          ))}
          <div>
            <div className="flex flex-col gap-2">
              <p className="text-center text-base">Status:</p>
              <p className="text-center text-base">{orderStatus}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-base text-center">₹ 1000</h1>
            {orderItems.map((val, i) => (
              <p className="text-base text-center">
                Quantity: {val.cartQuantity}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
