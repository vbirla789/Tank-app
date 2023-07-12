import React from "react";
import img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="py-10 bg-[#001A28] flex items-center flex-col ">
      <h1 className="underline font-semibold text-5xl lg:text-4xl mb-5 text-blue-300">
        Our Community
      </h1>
      <div className="flex gap-4 items-center justify-center py-4 drop-shad0w-xl md:p-2">
        <div className="flex flex-col gap-4 sm:hidden">
          <div className="relative">
            <img
              src={img1}
              className="rounded-xl h-[40vh] e-[50vh] w-[50vh] transition-all duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="relative">
            <img
              src={img1}
              className=" duration-500 ease-in-out hover:scale-105 rounded-xl h-[40vh] w-[50vh]"
            />
          </div>
        </div>
        <div className="sm:hidden relative">
          <img
            src={img1}
            className="rounded-xl w-[50vh]  duration-500 ease-in-out hover:scale-105 h-[81vh]"
          />
        </div>
        <div className="flex flex-col w-[100vh] gap-4 sm:w-full mx-2">
          <div className="flex gap-4">
            <div className="relative">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[50vh] h-[40vh] sm:w-[30vh] sm:h-[25vh]"
              />
            </div>
            <div className="relative">
              <img
                src={img1}
                className=" duration-500 ease-in-out hover:scale-105 rounded-xl w-[50vh] h-[40vh] sm:w-[30vh] sm:h-[25vh]"
              />
            </div>
          </div>
          <div className="relative">
            <img
              src={img1}
              className=" duration-500 ease-in-out hover:scale-105 rounded-xl h-[40vh] w-[100vh] sm:w-[50vh] sm:h-[25vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
