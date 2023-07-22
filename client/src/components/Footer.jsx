import React from "react";
import tank from "../assets/tank-logo.png";

const Footer = () => {
  return (
    <div className="py-10 bg-[#010C16] text-slate-200 px-10">
      <div className="flex md:flex-wrap items-center justify-around">
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={tank} className="w-[15vh]" />
          <h1 className="text-3xl hero_font font-bold w-[30vh] ">
            Water Tank Doctor
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-lg font-medium">Our Services</h1>
          <span>About us</span>
          <span>About Product</span>
          <span>Testimonials</span>
          <span>How to Install</span>
          <span>About Warrenty</span>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-lg font-medium">Contacts</h1>
          <span>Contact Us</span>
          <span>Our Community</span>
          <span>Customer Care</span>
          <span>Privacy Policies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
