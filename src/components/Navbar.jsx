import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Menudropdown from "../utils/Menudropdown";
import Cart from "../utils/Cart";
import tank from "../assets/tank-logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed w-full flex justify-between items-center h-[10vh] color text-slate-200 px-4 lg:h-[12vh]">
      <div className="flex gap-2">
        <Link to="/">
          <img src={tank} className="w-10 h-auto lg:w-" />
        </Link>
        <p className="w-[50%] lg:text-sm">Water Tank Doctor</p>
      </div>
      <div className="md:hidden">
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="product/1">About</Link>
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
                <AiOutlineShoppingCart className="text-xl" />
                <span className="absolute top-0 left-3 text-white rounded-full bg-slate-600 h-[15px] w-[15px] flex items-center justify-center text-xs">
                  {products.length}
                </span>
              </div>
            </li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="hidden lg:block mt-1">
          <RxHamburgerMenu
            className="text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && <Menudropdown isMenuOpen={isMenuOpen} />}
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
