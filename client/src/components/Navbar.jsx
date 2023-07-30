import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Menudropdown from "../utils/Menudropdown";
import Cart from "../utils/Cart";
import tank from "../assets/tank-logo.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import img from "../assets/WhatsApp Image 2023-06-26 at 2.33 1.png";

import { CgProfile } from "react-icons/cg";
import Profile from "../utils/Profile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prof, setProf] = useState(false);

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  // console.log(user);

  const products = useSelector((state) => state.cart.products);
  const shippingInfo = useSelector((state) => state.cart.shippingInfo);

  // console.log(shippingInfo);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkoutHandler = async (totalAmount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:3000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:3000/api/checkout", {
      totalAmount,
    });
    // console.log(order);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Tank App",
      description: "Test Transaction",
      image: img,
      order_id: order.id,
      callback_url: "http://localhost:3000/api/paymentverification",
      prefill: {
        name: user.name,
        email: user.email,
        contact: shippingInfo.phoneNo,
      },
      notes: {
        address: shippingInfo.address,
        state: shippingInfo.state,
        city: shippingInfo.city,
        pincode: shippingInfo.pinCode,
      },
      theme: {
        color: "#2c5567",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY >= 80) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  });

  return (
    <div
      className={`
        ${
          !navState ? "absolute navbar" : "fixed color blur-xsm"
        } z-20 lg:h-[12vh] h-[10vh] text-slate-200  justify-between items-center w-full flex px-4
        lg:pr-5        
      `}
    >
      <div className="flex gap-2">
        <Link to="/">
          <img src={tank} className="w-10 h-auto mt-1 lg:mt-0" />
        </Link>
        <p className="w-[50%] lg:text-sm">Water Tank Doctor</p>
      </div>
      <div className="md:hidden">
        <ul className="flex gap-8 items-center  text-lg">
          <li className="hover:underline hover:text-[#FFB82F]">
            <Link to="about">About</Link>
          </li>
          <li className="hover:underline hover:text-[#FFB82F]">
            <Link to="product/1">Product</Link>
          </li>
          <li className="hover:underline hover:text-[#FFB82F]">
            <Link to="product/1">FAQ's</Link>
          </li>
          {/* <li className="hover:underline hover:text-[#FFB82F]">
            <Link to="product/1">Blog</Link>
          </li> */}
          <li className="hover:underline hover:text-[#FFB82F]">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="lg:flex gap-4">
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <div
                onClick={() => setOpen(!open)}
                className="relative pt-2 lg:mb-2"
              >
                <AiOutlineShoppingCart className="text-2xl hover:underline hover:text-[#FFB82F]" />
                <span className="absolute top-0 left-3 text-white rounded-full bg-slate-600 h-[15px] w-[15px] flex items-center justify-center text-xs">
                  {products.length}
                </span>
              </div>
            </li>
            <li className="md:hidden mt-1">
              {" "}
              <button className="border-2 border-slate-200 py-0.5 px-4 text-slate-200 z-10 font-semibold rounded-full">
                <Link to="login" className=" hover:text-[#FFB82F]">
                  Login
                </Link>
              </button>
            </li>
            <li>
              <button
                className="z-10 mt-2 lg:mt-1"
                onClick={() => setProf(!prof)}
              >
                <CgProfile className="text-3xl hover:underline hover:text-[#FFB82F]" />
              </button>
              {prof && <Profile />}
            </li>
          </ul>
        </div>
        <div className="hidden lg:block ">
          {isMenuOpen ? (
            <RxCross1
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-3xl mt-1 absolute top-4 z-30 right-5"
            />
          ) : (
            <RxHamburgerMenu
              className="text-4xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
          {isMenuOpen && <Menudropdown isMenuOpen={isMenuOpen} />}
        </div>
      </div>
      {open && <Cart checkoutHandler={checkoutHandler} />}

      {open ? (
        <div className="absolute top-4 right-[35%] md:right-[10%] color rounded-[50%] p-2 opacity-90">
          <RxCross1
            onClick={() => setOpen(!open)}
            className="text-white text-3xl mt-1  z-30 "
          />
        </div>
      ) : (
        ""
      )}
      {prof ? (
        <div className="absolute top-5 right-[3%] color rounded-[50%] p-2 opacity-90">
          <RxCross1
            onClick={() => setProf(!prof)}
            className="text-white text-3xl mt-1 z-30"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
