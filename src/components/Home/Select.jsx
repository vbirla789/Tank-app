import React from "react";
import img from "../../assets/WhatsApp Image 2023-06-26 at 2.33 1.png";

const Select = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#142D43]">
      <h1 className="font-semibold text-5xl lg:text-4xl text-blue-300 underline mb-5 text-center">
        Chooose from 3 Categories
      </h1>
      <p className="font-semibold text-lg w-[80%] text-center mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
      <div className="flex justify-around items-center w-full mt-5">
        <div className="bg-slate-700 bg-opacity-66 shadow-md w-[50vh] md:w-[30vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col text-white duration-500 ease-in-out hover:scale-105 ">
          <img src={img} className="" />
          <h1 className="font-semibold text-yellow-300 text-3xl md:text-base">
            BASIC
          </h1>
          <p className="text-center">Some dummy text</p>
        </div>
        <div className="bg-slate-700 bg-opacity-66 shadow-md w-[50vh] md:w-[30vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col text-white duration-500 ease-in-out hover:scale-105 ">
          <img src={img} />
          <h1 className="font-semibold text-yellow-300 text-3xl md:text-base">
            STANDARD
          </h1>
          <p className="text-center">Some dummy text</p>
        </div>
        <div className="bg-slate-700 bg-opacity-66 shadow-md w-[50vh] md:w-[30vh] h-auto rounded-2xl p-2 flex items-center justify-center flex-col  duration-500 ease-in-out hover:scale-105 text-white">
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
