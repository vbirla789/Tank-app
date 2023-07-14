import React from "react";

const Footer = () => {
  return (
    <div className=" py-10 bg-[#010C16] text-slate-200">
      <div className="flex md:flex-wrap items-center justify-around">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium">Links</h1>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-lg font-medium">Links</h1>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-lg font-medium">Links</h1>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
          <span>Text</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 pt-5">
        <h1 className="text-3xl font-semibold ">Tank Store</h1>
        <span className="w-[60%]">
          The content of this site is copyright-protected and is the property of
          Store & Mauritz AB.
        </span>
      </div>
    </div>
  );
};

export default Footer;
