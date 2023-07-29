import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { useDispatch } from "react-redux";
import { logout } from "../redux/Action/userAction";
import User from "./profile/User";

const Profile = () => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div>
      <nav
        className="left-0  
     color flex flex-col gap-5 md:gap-0 opacity-100 absolute top-0 py-6 px-2 transition-all duration-500 w-full h-[120vh] mt-0 font-semibold text-xl "
      >
        <div className="flex gap-4 items-center ml-5 text-5xl mb-5">
          <CgProfile />
        </div>
        <div className="mt-5">
          <Link to="about" className="hover:underline hover:text-[#FFB82F]">
            Dashboard
          </Link>
          <hr class="h-[1px] my-3 bg-white border-0 border-dotted  "></hr>
        </div>
        <div>
          <Link to="product/2" className="hover:underline hover:text-[#FFB82F]">
            Orders
          </Link>
          <hr class="h-[1px] my-3 bg-white border-0 border-dotted  "></hr>
        </div>
        <div>
          <Link className="hover:underline hover:text-[#FFB82F]" to="/address">
            Address
          </Link>
          <hr class="h-[1px] my-3 bg-white border-0 border-dotted  "></hr>
        </div>
        <div>
          <Link
            className="hover:underline hover:text-[#FFB82F]"
            onClick={() => setUser(!user)}
          >
            Profile
          </Link>
          <hr class="h-[1px] my-3 bg-white border-0 border-dotted  "></hr>
          {user ? <User /> : ""}
        </div>

        <div>
          <button
            className="rounded-full py-1 px-5 border-2 text-white z-10 font-semibold mt-5 hover:text-[#FFB82F] "
            onClick={logoutUser}
          >
            <NavLink>Logout</NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
