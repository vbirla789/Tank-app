import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Items from "../../utils/Items";

const Slide = ({ items }) => {
  const splideOptions = {
    perPage: 2.5,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 2.5 },
      991: { perPage: 2 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="pt-0">
      <h1 className="text-5xl lg:text-4xl font-semibold text-center pb-10 text-transparent bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text underline">
        Our Happy Stories
      </h1>

      <div className="flex justify-center items-center px-5 md:flex-col md:gap-10">
        <div className="w-1/4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl font-sans pb-2 text-white content-head">
              4.5
            </p>
            <p className="text-xl text-[#EBEBEB]">Rating:</p>
            <span className="flex my-4 text-2xl text-[#ff6900]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="w-3/4 md:w-[70%] sm:w-[100%]">
          <Splide options={splideOptions}>
            {items.map((data, i) => (
              <SplideSlide key={i}>
                <Items {...data} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <hr class="h-[5px] mt-10 mx-10 bg-gray-200 border-0 border-dotted dark:bg-gray-700 "></hr>
    </div>
  );
};

export default Slide;
