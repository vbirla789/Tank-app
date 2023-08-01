import React, { useEffect, useState } from "react";
import img from "../../assets/Ellipse 35.svg";

import ReviewSlide from "./ReviewSlide";
import CreateReview from "./CreateReview";
import { useDispatch, useSelector } from "react-redux";
import { newReview } from "../../redux/Action/reviewAction";
import { useParams } from "react-router";

const Reviews = ({ reviewsData }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  //   const { review } = useSelector((state) => state.newReview);

  //   console.log(review);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center underline my-[8vh] sm:my-[5vh]">
        Reviews
      </h1>
      <div className="flex justify-center items-center gap-2 my-[10vh] sm:my-[5vh]">
        <div>
          <div className="relative flex items-center justify-center">
            <img src={img} className="w-[70%]" />
            <p className="absolute bottom-[35%] left-[30%] text-4xl sm:text-2xl content-head sm:left-[30%] sm:bottom-[30%]">
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
            <p className="absolute bottom-[35%] left-[30%] text-4xl sm:text-2xl content-head sm:left-[30%] sm:bottom-[30%]">
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
            <p className="absolute bottom-[35%] left-[30%] text-4xl sm:text-2xl content-head sm:left-[30%] sm:bottom-[30%]">
              4.5
            </p>
          </div>
          <div className="text-center mt-2">
            <p className="content-head text-xl">Material</p>
          </div>
        </div>
      </div>

      <ReviewSlide reviewsData={reviewsData} />
      <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full mt-10 px-5 "></hr>
      <div className="flex items-center justify-center flex-col">
        {open ? <CreateReview /> : ""}

        <button
          className="bg-blue-500 hover:bg-blue-600 my-10 py-3 px-10 rounded-md text-sm font-semibold text-white drop-shadow-2xl"
          onClick={() => setOpen(!open)}
        >
          Write a review / feedback
        </button>
      </div>
    </div>
  );
};

export default Reviews;
