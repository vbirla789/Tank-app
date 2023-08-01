import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import Img from "../utils/Img";

import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DotLoader from "react-spinners/DotLoader";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import More from "../utils/More";
import { Link, NavLink, useParams } from "react-router-dom";

import ProductData from "../utils/product/ProductData";
import Reviews from "../utils/product/Reviews";
import { getAllReviews, newReview } from "../redux/Action/reviewAction";

const id = 1;
const img =
  "https://firebasestorage.googleapis.com/v0/b/pers-f1679.appspot.com/o/tnakii.png?alt=media&token=140f940a-2a8c-49a7-a04f-21d26d433f67";
const title = "Water Tank Jacket | 750 litre";
const price = 1000;
const cartQuantity = 1;
const volume = "750 litre";

const Product = ({ images, items }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // console.log(id);

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.cart.productData);

  const compare = () => {
    let compareProductsData = productData.filter((e) => {
      return e.id == id;
    });
    setData(compareProductsData);
  };

  // console.log(data);

  useEffect(() => {
    compare();
  }, [id]);

  const reviewsData = useSelector((state) => state.allReview);

  console.log(reviewsData);

  useEffect(
    (id) => {
      dispatch(getAllReviews(id));
    },
    [dispatch]
  );

  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

  return (
    <div className="">
      <div className="flex justify-center items-center pt-[15vh] flex-col">
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
                  <div className="w-1/4 p-4 sm:w-1/3">
                    <NavLink to="/product/64c81486940c3b554a23006c">
                      <img
                        src={img}
                        alt="Small Image"
                        className="w-full h-auto"
                      />
                    </NavLink>
                    <p className="text-center mr-1 text-base">500 litre</p>
                  </div>
                  <div className="w-1/3 p-4 ">
                    <NavLink to="/product/64c814a2940c3b554a230070">
                      <img
                        src={img}
                        alt="Medium Image"
                        className="w-full h-[16vh] sm:h-[7vh]"
                      />
                    </NavLink>
                    <p className="text-center mr-1 text-base">750 litre</p>
                  </div>
                  <div className="w-1/3 p-4 ">
                    <NavLink to="/product/64c814b0940c3b554a230074">
                      <img
                        src={img}
                        alt="Large Image"
                        className="w-full h-[18vh] sm:h-[8vh]"
                      />
                    </NavLink>
                    <p className="text-center mr-1 text-base">1000 litre</p>
                  </div>
                </div>
              </div>
            </div>
            {data.map((val, i) => (
              <ProductData {...val} />
            ))}
          </div>
        )}
      </div>
      <div className="mx-10 mt-2">
        <h1 className="font-semibold mb-5">Product description</h1>
        <p className="">
          Water tank Doctor Thermal insulation jacket is specially designed
          Innovative Product by engineers considering Indian environment, to
          keep the Roof tank water Normal in summer and winters, to be used
          directly without irritating and harm to human body. Jacket is easy to
          be installed by any one alone. It needs to be wrapped around the tank
          and tied with given belts. Indirectly it save electricity in Geysers
          during winters, refilling tanks with cold ground water several time a
          day and thus control wastage of water and energy. Enhance life of
          Tank. It has Double layer UV protection. Having Protection with Bliss
          Thermal Insulation Jacket, you can use water in Bath/Toilet & kitchen
          directly without scalding hand and other body parts in Hot summers and
          chilling winters. No Need to store water under roof to cool down and
          waste time and energy.
        </p>
        <div className="flex items-center justify-center flex-col mt-5">
          {more ? <More /> : ""}
          <button
            className="px-10 py-1 rounded-full bg-[#3A89FF] text-[#fff] text-center"
            onClick={() => setMore(!more)}
          >
            More Info
          </button>

          {more ? (
            <AiOutlineUp className="text-xl" />
          ) : (
            <AiOutlineDown className="text-xl " />
          )}
        </div>
        <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full my-4 px-5 "></hr>
        <Reviews reviewsData={reviewsData} />
      </div>
    </div>
  );
};

export default Product;
