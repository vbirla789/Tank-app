import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import Img from "../utils/Img";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DotLoader from "react-spinners/DotLoader";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

const id = 1;
const img =
  "https://firebasestorage.googleapis.com/v0/b/pers-f1679.appspot.com/o/tnakii.png?alt=media&token=140f940a-2a8c-49a7-a04f-21d26d433f67";
const title = "Water Tank Jacket | 750 litre";
const price = 1000;
const cartQuantity = 1;

const Product = ({ images, items }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "0", //1rem
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
  // const reviewsOptions = {
  //   perPage: 2.5,
  //   perMove: 1,
  //   type: "loop",
  //   rewind: true,
  //   keyboard: "global",
  //   gap: "1rem",
  //   pagination: false,
  //   padding: "2rem",
  //   breakpoints: {
  //     1200: { perPage: 3 },
  //     991: { perPage: 2 },
  //     768: { perPage: 1 },
  //     500: { perPage: 1 },
  //     425: { perPage: 1 },
  //   },
  // };
  const dispatch = useDispatch();

  const addCart = () => {
    const item = { id, img, title, price, cartQuantity };
    dispatch(addToCart(item));
  };
  return (
    <div className="flex justify-center items-center py-[15vh] flex-col min-h-[80vh]">
      {loading ? (
        <DotLoader
          color={"#142D43"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="mx-4 bg-white flex md:flex-col justify-around w-full ">
          <div className="w-[40%] md:w-[80%] mx-auto">
            <Splide options={splideOptions}>
              {images.map((data, i) => (
                <SplideSlide key={i}>
                  <Img {...data} />
                </SplideSlide>
              ))}
            </Splide>
            <hr class="h-[3px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 w-[80%] mx-auto"></hr>
            <div className="mt-[10vh] mx-10">
              <h1 className="font-semibold text-lg">Choose a Size:</h1>
              <div className="flex justify-center items-end">
                <div className="w-1/4 p-4 ">
                  <img src={img} alt="Small Image" className="w-full h-auto" />
                  <p className="text-center mr-1 text-base">500 litre</p>
                </div>
                <div className="w-1/3.1 p-4 ">
                  <img
                    src={img}
                    alt="Medium Image"
                    className="w-full h-[16vh]"
                  />
                  <p className="text-center mr-1 text-base">750 litre</p>
                </div>
                <div className="w-1/3 p-4 ">
                  <img
                    src={img}
                    alt="Large Image"
                    className="w-full h-[18vh]"
                  />
                  <p className="text-center mr-1 text-base">1000 litre</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mr-10 md:items-center md:w-full md:px-5">
            <h2 className="text-2xl font-semibold mb-2 pt-5">{title}</h2>
            <p className="mb-4 text-xl font-sans w-[80%]">
              Insulated Jacket with American Nano Technology and European
              Quality Materials
            </p>
            <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full"></hr>
            <p className="my-5 text-2xl font-bold ">
              ₹ {price}{" "}
              <span className="line-through text-sm text-slate-300">4999 </span>
            </p>
            <hr class="h-[3px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full mb-4 "></hr>

            <div className="bg-blue-100 rounded-xl py-8 mx-auto px-6 w-full">
              <div className="flex items-center mb-10 justify-center">
                <div className="flex gap-5">
                  {" "}
                  <h1 className="font-semibold ">Quantity :</h1>
                  <div className="flex items-center justify-around bg-slate-400 w-[20vh] sm:w-[10vh] lg:w-[15vh] mx-auto rounded-md blur-xsm shadow-md">
                    <button
                      type="button"
                      className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                    >
                      <MinusIcon
                        className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] "
                        onClick=""
                      />
                    </button>
                    <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center text-sm">
                      1
                    </div>

                    <button
                      type="button"
                      className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                    >
                      <PlusIcon
                        className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"
                        onClick=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mb-10">
                <button className="rounded-full py-1 w-[50%] text-black z-10 font-semibold hero_bg drop-shadow-lg">
                  BUY NOW
                </button>
                <button
                  className="rounded-full border-2 border-black py-1 w-[50%] text-black font-semibold z-10 drop-shadow-lg"
                  onClick={addCart}
                >
                  ADD TO CART
                </button>
              </div>

              <div
                className="flex items-center justify-center text-black text-lg flex-col
              "
              >
                <div className="flex gap-[10vh] ">
                  <p className="font-bold text-start">Colour: </p>
                  <span className="font-semibold">Blue</span>
                </div>
                <div className="flex gap-[10vh] ">
                  <p className="font-bold text-start">Finish Type: </p>
                  <span className="font-semibold">Satin</span>
                </div>
                <div className="flex gap-[10vh] ">
                  <p className="font-bold text-start">Item Volume: </p>
                  <span className="font-semibold">750 litre</span>
                </div>
              </div>
              <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full my-4 px-5 "></hr>

              <div className="font-semibold">
                <h1 className="font-semibold mb-5">About This Item</h1>
                <p>
                  • India’s 1st; Vastu Shastra based Water Tank Insulated
                  Jacket. No More Extreme Hot Water in the Soaring Summer’s .No
                  More Cold Water in the Harsh Cold Winter’s{" "}
                </p>

                <p>
                  • 99% Prevention from Harmful UV & IR Rays.D. I. Y (Do It
                  Yourself) Easy Installation Friendly Design for New & Old
                  Water Tanks . American Nano Technology and European Quality
                  Materials used{" "}
                </p>
                <p>
                  {" "}
                  • Savings on Electricity Bills from R.O’s, Heater’s and
                  Geyser’s . Prevention from Harmful Bacteria’s , Fungus,
                  Mildew, Dust and Leaf’s .Protect your Water Tank Lids/Covers
                  from Flying away
                </p>

                <p>
                  • Protection from Monkey’s, Squirrels and Bird’s . Prevention
                  from Bad Water Taste Reduction in Frequent Water Tank Cleaning
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
