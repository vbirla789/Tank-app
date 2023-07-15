import React from "react";

const Content = () => {
  return (
    <div className="bg-[#27ACAC] flex items-center justify-evenly w-full py-8 md:flex-col md:gap-10">
      <div className="flex">
        <div className="flex mr-1">
          <p className="text-7xl font-bold text-yellow-300 content-head">#1</p>
        </div>
        <div className="flex flex-col mt-1">
          <span className="font-semibold text-xl ">Time in</span>
          <span className="font-semibold text-3xl text-[#fff]">India</span>
        </div>
      </div>
      <div className="w-[50%]">
        <p className="font-semibold text-[#fff] content-font text-xl">
          "Lorem Ipsum is simply dummy text of the printing and typeshomew
          etting Lorem Ipsum has been the industry's"
        </p>
      </div>
    </div>
  );
};

export default Content;
