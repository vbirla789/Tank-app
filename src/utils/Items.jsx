import React from "react";
import { AiFillStar } from "react-icons/ai";

const Items = ({ name, img, time, review }) => {
  return (
    <div className="head rounded p-5 h-auto min-h-[45vh] w-[54vh] pb-[10px] drop-shadow-md hover:drop-shadow-xl sm:min-h-[40vh]">
      <div className="flex flex-col items-start justify-center mx-auto">
        <div className="flex gap-5 items-center ">
          <div className="flex items-center justify-center">
            <img src={img} className="h-14 w-14 rounded-full" />
          </div>
          <div className="flex flex-col">
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
          <p className="max-w-[250px] mt-5 font-semibold">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
