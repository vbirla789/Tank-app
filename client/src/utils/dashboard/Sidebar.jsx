import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="col-span-1 text-xl font-semibold p-2 ">
        <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
          <hr className="h-[1px] my-3 bg-white border-0 border-dotted" />
        </div>
        <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            to="/admin/products"
          >
            Products
          </Link>
          <hr className="h-[1px] my-3 bg-white border-0 border-dotted" />
        </div>
        <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            to="/admin/orders"
          >
            Orders
          </Link>
          <hr className="h-[1px] my-3 bg-white border-0 border-dotted" />
        </div>
        <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            to="/admin/users"
          >
            Users
          </Link>
          <hr className="h-[1px] my-3 bg-white border-0 border-dotted" />
        </div>
        {/* <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            to="/admin/reviews"
          >
            Reviews
          </Link>
          <hr className="h-[1px] my-3 bg-white border-0 border-dotted" />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
