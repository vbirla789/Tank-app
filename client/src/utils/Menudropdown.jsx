import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
import tank from "../assets/tank-logo.png";
import { NavLink } from "react-router-dom";

const Menudropdown = ({ isMenuOpen }) => {
  // console.log(isMenuOpen);
  return (
    <nav
      className={`${
        isMenuOpen ? "lg:right-0  " : "-right-full"
      } color flex flex-col  gap-5 opacity-100 absolute top-0 py-[15vh] px-10 transition-all duration-500 w-[50%] h-[100vh] mt-0 font-semibold text-xl`}
    >
      {/* <div>
        <Link to="/">
          <img src={tank} className="w-[10vh] h-auto " />
        </Link>
      </div> */}

      <div>
        <Link to="about" className="hover:underline hover:text-[#FFB82F]">
          About
        </Link>
        <hr class="h-[1px] mt-3 bg-white border-0 border-dotted  "></hr>
      </div>
      <div>
        <Link
          to="product/64c81486940c3b554a23006c"
          className="hover:underline hover:text-[#FFB82F]"
        >
          Product
        </Link>
        <hr class="h-[1px] mt-3 bg-white border-0 border-dotted  "></hr>
      </div>
      <div>
        <Link to="product/1" className="hover:underline hover:text-[#FFB82F]">
          FAQ's
        </Link>
        <hr class="h-[1px] mt-3 bg-white border-0 border-dotted  "></hr>
      </div>

      <div>
        <Link to="contact" className="hover:underline hover:text-[#FFB82F]">
          Contact
        </Link>
        <hr class="h-[1px] mt-3 bg-white border-0 border-dotted  "></hr>
      </div>
      <div>
        <button className="rounded-full py-1 px-5 border-2 text-white z-10 font-semibold mt-5">
          <NavLink to="login">Login</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Menudropdown;
