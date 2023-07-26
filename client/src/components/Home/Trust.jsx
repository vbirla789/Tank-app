import React from "react";
import img1 from "../../assets/img1.jpg";

const Trust = () => {
  return (
    <div className="flex items-center justify-center flex-col py-10 bg-[#001A28]">
      <h1 className="font-semibold text-5xl lg:text-4xl text-transparent bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text underline text-center mb-5">
        We are Trusted & Verified
      </h1>
      <div className="flex md:flex-col-reverse">
        <div className="p-5 flex items-center">
          {" "}
          <div className="sm:w-[40vh] sm:h-[22vh] w-[80vh] h-[40vh] rounded-xl bg-white "></div>
        </div>
        <div className="p-5 flex items-center sm:justify-center mx-auto">
          {" "}
          <img src={img1} className="w-[60vh] rounded-xl sm:w-[30vh]" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
