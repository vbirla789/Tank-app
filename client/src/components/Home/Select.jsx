import React from "react";
import img from "../../assets/WhatsApp Image 2023-06-26 at 2.33 1.png";

const Select = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <h1 className="font-semibold text-5xl lg:text-4xl text-transparent bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text underline mb-6 text-center">
        Chooose from 3 Categories
      </h1>
      <p className="font-semibold text-lg w-[80%] text-center mb-5 text-[#D9D9D9]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <div className="flex justify-around items-center w-full mt-5 lg:flex-col lg:gap-6">
        <div className="bg-gradient-to-br from-white/30 to-white/50  bg-opacity-0 bg-opacity-66 shadow-md w-[50vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col text-white duration-500 ease-in-out hover:scale-105 sm:w-[30vh]">
          <img src={img} className="" />
          <h1 className="font-semibold text-yellow-300 text-3xl md:text-base">
            BASIC
          </h1>
          <p className="text-center">Some dummy text</p>
        </div>
        <div className="bg-gradient-to-br from-white/30 to-white/50  bg-opacity-66 shadow-md w-[50vh] sm:w-[30vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col text-white duration-500 ease-in-out hover:scale-105 ">
          <img src={img} />
          <h1 className="font-semibold text-yellow-300 text-3xl md:text-base">
            STANDARD
          </h1>
          <p className="text-center">Some dummy text</p>
        </div>
        <div className="bg-gradient-to-br from-white/30 to-white/50  bg-opacity-66 shadow-md w-[50vh] sm:w-[30vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col  duration-500 ease-in-out hover:scale-105 text-white">
          <img src={img} />
          <h1 className="font-semibold text-yellow-300 text-3xl md:text-base">
            PREMIUM
          </h1>
          <p className="text-center">Some dummy text</p>
        </div>
      </div>
    </div>
  );
};

export default Select;
