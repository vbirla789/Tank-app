import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewItems = ({ name, img, time, review }) => {
  return (
    <div className="bg-blue-100  rounded-xl p-3 h-auto min-h-[50vh] w-[90%] pb-[10px] drop-shadow-md hover:drop-shadow-xl sm:w-[25vh] sm:min-h-[34vh]">
      <div className="flex flex-col justify-center mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#427fed] font-semibold">{name}</h1>
            <p className="text-[#999]">{time}</p>
            <span className="flex  my-1 text-[#ff6900]">
              <AiFillStar className="" />
              <AiFillStar className="" />
              <AiFillStar className="" />
              <AiFillStar className="" />
              <AiFillStar className="" />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="max-w-[250px] mt-5 font-semibold text-center">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
