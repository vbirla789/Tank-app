import React from "react";
import img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="py-10 bg-[#001A28] flex items-center flex-col px-20 sm:px-10">
      <h1 className="underline font-semibold text-5xl lg:text-4xl mb-10 text-blue-300">
        Our Community
      </h1>
      <div className="flex gap-4 items-center justify-center py-4 drop-shad0w-xl md:p-2">
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="flex justify-end">
            <img
              src={img1}
              className="rounded-xl h-[35vh] w-[40vh] transition-all duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative">
            <img
              src={img1}
              className=" duration-500 ease-in-out hover:scale-105 rounded-xl h-[35vh] w-[60vh]"
            />
          </div>
        </div>
        <div className="sm:hidden relative">
          <img
            src={img1}
            className="rounded-xl w-[45vh]  duration-500 ease-in-out hover:scale-105 h-[81vh]"
          />
        </div>
        <div className="flex flex-col w-[100vh] gap-4 sm:w-full ">
          <div className="flex gap-4">
            <div className="relative">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[35vh] h-[35vh] sm:w-[30vh] sm:h-[20vh]"
              />
            </div>
            <div className="flex items-end">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[50vh] h-[35vh] sm:w-[30vh] sm:h-[18vh]"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={img1}
              className=" duration-500 ease-in-out hover:scale-105 rounded-xl h-[35vh] w-[80vh] sm:w-[70vh] sm:h-[20vh]"
            />
          </div>
          <div className="gap-4 hidden  sm:flex">
            <div className="relative">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[50vh] h-[40vh] sm:w-[30vh] sm:h-[35vh]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[40vh] h-[40vh] sm:w-[30vh] sm:h-[18vh]"
              />
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[40vh] h-[40vh] sm:w-[30vh] sm:h-[20vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
