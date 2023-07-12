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
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="bg-gradient-to-r from-[#01182E] to-[#142D43] py-10">
      <h1 className="text-5xl lg:text-4xl font-semibold text-center pb-10 text-green-600 underline  ">
        Our Happy Stories
      </h1>
      <div className="flex justify-center items-center px-5">
        <div className="w-1/4 flex items-center justify-center">
          <div>
            <p className="text-6xl font-sans pb-2 text-white">4.5</p>
            <p className="text-2xl text-white">Rating</p>
            <span className="flex my-4 text-2xl text-[#ff6900]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
        <div className="w-3/4">
          <Splide options={splideOptions}>
            {items.map((data, i) => (
              <SplideSlide key={i}>
                <Items {...data} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Slide;
