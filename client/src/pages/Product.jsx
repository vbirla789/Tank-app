import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import Img from "../utils/Img";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Items from "../utils/Items";

const id = 1;
const img =
  "https://firebasestorage.googleapis.com/v0/b/pers-f1679.appspot.com/o/tnakii.png?alt=media&token=140f940a-2a8c-49a7-a04f-21d26d433f67";
const title = "EXTREME COVER| 750 litre";
const price = 1000;
const cartQuantity = 1;

const Product = ({ images, items }) => {
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 1 },
      991: { perPage: 1 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  const reviewsOptions = {
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
      991: { perPage: 2 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };
  const dispatch = useDispatch();

  const addCart = () => {
    const item = { id, img, title, price, cartQuantity };
    dispatch(addToCart(item));
  };
  return (
    <div className="flex justify-center items-center py-[15vh] flex-col">
      <div className="mx-4 bg-white flex md:flex-col justify-around w-full ">
        <div className="w-[40%] md:w-[90%] mx-auto">
          <Splide options={splideOptions}>
            {images.map((data, i) => (
              <SplideSlide key={i}>
                <Img {...data} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="px-6 flex flex-col bg-blue-100 rounded-xl py-10 lg:w-[80%] mx-auto w-[50%] my-10">
          <h2 className="text-2xl font-semibold mb-5">{title}</h2>
          <p className="mb-5 text-xl font-sans">
            M.R.P<span> ${price}</span>
          </p>
          <h1 className="mb-1 text-lg">Description</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="mb-1 text-lg">About this item</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            adipiscing elit.
          </p>
          <button
            className="color text-white rounded mt-10 py-1 lg:w-[50%] w-[30%] opacity-90"
            onClick={addCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
