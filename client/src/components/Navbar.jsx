import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Menudropdown from "../utils/Menudropdown";
import Cart from "../utils/Cart";
import tank from "../assets/tank-logo.png";
import { useSelector } from "react-redux";
import axios from "axios";
import img from "../assets/WhatsApp Image 2023-06-26 at 2.33 1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkoutHandler = async (totalAmount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      totalAmount,
    });
    // console.log(key);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Tank App",
      description: "Test Transaction",
      image: img,
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2c5567",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="fixed w-full flex justify-between items-center h-[10vh] color text-slate-200 px-4 lg:h-[12vh] lg:pr-5 z-20 blur-xsm">
      <div className="flex gap-2">
        <Link to="/">
          <img src={tank} className="w-10 h-auto mt-1 lg:mt-0" />
        </Link>
        <p className="w-[50%] lg:text-sm">Water Tank Doctor</p>
      </div>
      <div className="md:hidden">
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="product/1">Product</Link>
          </li>
          <li>
            <Link to="product/1">FAQ's</Link>
          </li>
          <li>
            <Link to="product/1">Blog</Link>
          </li>
          <li>
            <Link to="product/1">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="lg:flex lg:justify-between gap-4">
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <div onClick={() => setOpen(!open)} className="relative pt-2">
                <AiOutlineShoppingCart className="text-2xl" />
                <span className="absolute top-0 left-3 text-white rounded-full bg-slate-600 h-[15px] w-[15px] flex items-center justify-center text-xs">
                  {products.length}
                </span>
              </div>
            </li>
            <li className="md:hidden ">Sign up</li>
          </ul>
        </div>
        <div className="hidden lg:block ">
          {isMenuOpen ? (
            <RxCross1
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-3xl mt-1 absolute top-4 z-30 right-2 "
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
    </div>
  );
};

export default Navbar;
