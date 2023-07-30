import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link, NavLink } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  });
  return (
    <nav className=" color flex flex-col  gap-5 opacity-100 absolute top-0 right-0 py-[15vh] px-10 transition-all duration-500 w-[50%] h-[100vh] mt-0 font-semibold text-xl md:px-3">
      {isAuthenticated ? (
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl mb-[15vh] md:mb-6">Profile</h1>
          <div className="flex gap-4 md:gap-1 mb-3">
            <span>User :</span>
            <h1>{user.name}</h1>
          </div>
          <div className="flex md:flex-col gap-4 md:gap-1 mb-3">
            <span className="text-center">Email :</span>
            <h1 className="sm:text-base">{user.email}</h1>
          </div>
          <div className="flex md:flex-col gap-4 md:gap-1">
            <span>Joined On</span>
            <h1>{String(user.CreatedAt).substr(0, 10)}</h1>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default User;
