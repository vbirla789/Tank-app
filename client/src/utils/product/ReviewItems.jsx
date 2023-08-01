import React from "react";

import { AiFillStar } from "react-icons/ai";

const ReviewItems = ({ name, comment, _id, rating }) => {
  // Calculate the number of filled stars and remaining stars
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  return (
    <div
      className="bg-blue-100 rounded-xl p-3 h-auto min-h-[50vh] w-[90%] pb-[10px] drop-shadow-md hover:drop-shadow-xl sm:w-[25vh] sm:min-h-[34vh]"
      key={_id}
    >
      <div className="flex flex-col justify-center mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#427fed] font-semibold">{name}</h1>
            <span className="flex my-1 text-[#ff6900]">
              {[...Array(filledStars)].map((_, index) => (
                <AiFillStar key={index} className="" />
              ))}
              {[...Array(remainingStars)].map((_, index) => (
                <AiFillStar
                  key={index + filledStars}
                  className="text-gray-400"
                />
              ))}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="max-w-[250px] mt-5 font-semibold text-center">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
