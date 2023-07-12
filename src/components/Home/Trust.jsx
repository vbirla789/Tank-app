import React from "react";
import img1 from "../../assets/img1.jpg";

const Trust = () => {
  return (
    <div className="flex items-center justify-center flex-col py-10 bg-[#001A28]">
      <h1 className="font-semibold text-5xl lg:text-4xl text-pink-300 underline text-center">
        We are Trusted & Verified
      </h1>
      <div className="flex sm:flex-col">
        <div className="p-5 flex items-center">
          {" "}
          <img src={img1} className="w-[80vh] rounded-xl " />
        </div>
        <div className="p-5 flex items-center sm:justify-center">
          {" "}
          <img src={img1} className="w-[60vh] rounded-xl sm:w-[30vh]" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
