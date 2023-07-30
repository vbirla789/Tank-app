import React from "react";
import img from "../../assets/Ellipse 35.svg";

import ReviewSlide from "./ReviewSlide";

const Reviews = ({ items }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center underline my-[8vh] sm:my-[5vh]">
        Reviews
      </h1>
      <div className="flex justify-center items-center gap-2 my-[10vh] sm:my-[5vh]">
        <div>
          <div className="relative flex items-center justify-center">
            <img src={img} className="w-[70%]" />
            <p className="absolute bottom-[30%] left-[35%] text-4xl content-head sm:left-[27%] sm:bottom-[20%]">
              4.5
            </p>
          </div>
          <div className="text-center mt-2">
            <p className="content-head text-xl">Quality</p>
          </div>
        </div>
        <div>
          <div className="relative flex items-center justify-center">
            <img src={img} className="w-[70%]" />
            <p className="absolute bottom-[30%] left-[35%] text-4xl content-head sm:left-[27%] sm:bottom-[20%]">
              4.5
            </p>
          </div>
          <div className="text-center mt-2">
            <p className="content-head text-xl">Service</p>
          </div>
        </div>
        <div>
          <div className="relative flex items-center justify-center">
            <img src={img} className="w-[70%]" />
            <p className="absolute bottom-[30%] left-[35%] text-4xl content-head sm:left-[27%] sm:bottom-[20%]">
              4.5
            </p>
          </div>
          <div className="text-center mt-2">
            <p className="content-head text-xl">Material</p>
          </div>
        </div>
      </div>

      <ReviewSlide items={items} />
      <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full my-10 px-5 "></hr>
      <div className="flex items-center justify-center">
        <button className="bg-[#2E81FF] mb-10 py-3 px-10 rounded-md text-sm font-semibold text-white drop-shadow-2xl">
          Write a review / sumbit a feedback
        </button>
      </div>
    </div>
  );
};

export default Reviews;
