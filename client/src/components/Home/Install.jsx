import React from "react";
import img1 from "../../assets/img1.jpg";

const Install = () => {
  return (
    <div className="flex items-center flex-col bg-[#142D43] py-10 px-5">
      <h1 className="font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-5">
        How to Install
      </h1>
      <div className="flex lg:flex-col">
        <div className="p-5">
          <img src={img1} className="rounded-xl h-auto" />
        </div>
        <div className="p-5 flex items-center flex-col justify-center">
          <p className="text-xl w-[80%] lg:w-[90%] font-semibold lg:text-xl text-[#fff]">
            Installing our jacket is a breeze with our user-friendly
            Do-It-Yourself (DIY) design, suitable for any new or existing water
            tank. No more worries about lost tank lids or covers, as our jacket
            fits perfectly and secures your water reservoir.
          </p>
          <button className="bg-violet-600 lg:py-1 lg:px-3 rounded-md mt-10 text-white px-8 py-2 text-xl lg:text-lg">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
