import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { getAllOrders } from "../../redux/Action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/Action/orderAction";
import OrderData from "./OrderData";
import DotLoader from "react-spinners/DotLoader";

const Orders = () => {
  const dispatch = useDispatch();

  const { error, orders } = useSelector((state) => state.allOrders);

  // console.log(orders);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllOrders());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <div className="grid grid-cols-6 gap-4 min-h-[100vh] pt-[15vh]">
      <Sidebar />
      {loading ? (
        <DotLoader
          color={"#142D43"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="col-span-5 px-10">
          <h1 className="text-3xl font-semibold text-center mb-5">Orders</h1>
          <div className="flex justify-around items-center mb-5 bg-slate-300 px-3 rounded-3xl py-3 font-semibold">
            <span>Order ID</span>
            <h1>Status</h1>
            <p>Item Name</p>
            <p>Amount</p>
            <p>Actions</p>
          </div>

          {orders &&
            orders.map((order) => <OrderData order={order} key={order._id} />)}
        </div>
      )}
    </div>
  );
};

export default Orders;
