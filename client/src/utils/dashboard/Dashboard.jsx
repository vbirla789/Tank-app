import React, { useEffect } from "react";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/Action/userAction";
import { getAllOrders } from "../../redux/Action/orderAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 gap-4 min-h-[100vh] pt-[15vh]">
      <Sidebar />
      <div className="col-span-5 px-10">
        <h1 className="text-center text-3xl mb-5 font-semibold">Dashboard</h1>
        <div className="bg-slate-300 py-3 flex justify-center items-center gap-5 rounded-xl font-semibold mb-[10vh]">
          <h1 className="">Total Amount</h1>
          <p>₹2000</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="rounded-[50%] bg-slate-200 flex items-center justify-center flex-col font-semibold w-[25vh] h-[25vh] gap-2">
            <h1 className="text-xl">Product</h1>
            <span className="text-2xl">9</span>
          </div>
          <div className="rounded-[50%] bg-slate-200 flex items-center justify-center flex-col font-semibold w-[25vh] h-[25vh] gap-2">
            <h1 className="text-xl">Orders</h1>
            <span className="text-2xl">{orders && orders.length}</span>
          </div>
          <div className="rounded-[50%] bg-slate-200 flex items-center justify-center flex-col font-semibold w-[25vh] h-[25vh] gap-2">
            <h1 className="text-xl">Users</h1>
            <span className="text-2xl">{users.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
