import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menudropdown = ({ isMenuOpen }) => {
  // console.log(isMenuOpen);
  return (
    <nav
      className={`${
        isMenuOpen ? "left-20 lg:left-0 md:left-0 " : "-right-full"
      } color flex flex-col  gap-5 opacity-100 absolute top-0 py-2 px-5 transition-all duration-500 w-[50%] h-[100vh] mt-0 `}
    >
      <div>
        <Link to="products/1">About</Link>
      </div>
      <div>
        <Link to="products/2">Product</Link>
      </div>
      <div>
        <Link to="products/1">FAQ's</Link>
      </div>
      <div>
        <Link to="products/2">Blog</Link>
      </div>
      <div>
        <Link to="products/1">Contact</Link>
      </div>
      <div>
        <Link to="products/2">About</Link>
      </div>
    </nav>
  );
};

export default Menudropdown;
