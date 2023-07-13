import React from "react";

const Content = () => {
  return (
    <div className="bg-[#27ACAC] flex items-center justify-around w-full py-8">
      <div className="flex">
        <div className="flex items-end mr-1">
          <p className="text-6xl text-yellow-300 ">#1</p>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl mt-2">Time in</span>
          <span className="font-semibold text-xl text-[#fff]">India</span>
        </div>
      </div>
      <div className="w-[60%]">
        <p className="font-semibold text-[#fff]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default Content;
