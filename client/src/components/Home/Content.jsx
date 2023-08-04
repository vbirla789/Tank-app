import React from "react";

const Content = () => {
  return (
    <div className="bg-[#27ACAC] flex items-center justify-evenly w-full py-8 md:flex-col md:gap-10">
      <div className="flex">
        <div className="flex mr-1">
          <p className="text-7xl font-bold text-yellow-300 content-head">#1</p>
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-semibold text-xl ">Time in</span>
          <span className="font-semibold text-3xl text-[#fff]">India</span>
        </div>
      </div>
      <div className="w-[50%]">
        <p className="font-semibold text-[#fff] content-font text-xl">
          "Introducing Water Tank Doctor, India's first innovative outdoor water
          tank jacket, designed smartly with advanced American technology and
          top-quality European materials. Experience long-lasting durability,
          excellent protection against elements, and precise temperature control
          for your water tanks "
        </p>
      </div>
    </div>
  );
};

export default Content;
