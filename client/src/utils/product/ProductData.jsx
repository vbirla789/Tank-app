import React from "react";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const ProductData = ({
  data: { id, img, title, price, volume, cartQuantity },
}) => {
  const dispatch = useDispatch();
  const addCart = () => {
    const item = { id, img, title, price, cartQuantity };
    dispatch(addToCart(item));
  };
  return (
    <div className="flex flex-col mr-10 md:items-center md:w-full md:px-5 w-[100%]">
      <h2 className="text-2xl font-semibold mb-2 pt-5 sm:text-center">
        {title}
      </h2>
      <p className="mb-4 text-xl font-sans w-[80%]">
        Insulated Jacket with American Nano Technology and European Quality
        Materials
      </p>
      <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full"></hr>
      <p className="my-5 text-2xl font-bold ">
        ₹ {price}{" "}
        <span className="line-through text-sm text-slate-300">4999 </span>
      </p>
      <hr class="h-[3px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full mb-4 "></hr>

      <div className="bg-blue-100 rounded-xl py-8 mx-auto px-6 w-full">
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            className="rounded-full py-[6px] w-[50%] text-black z-10 font-semibold hero_bg drop-shadow-lg"
            onClick={addCart}
          >
            BUY NOW
          </button>
          <button
            className="rounded-full border-2 border-black py-[6px] w-[50%] text-black font-semibold z-10 drop-shadow-lg"
            onClick={addCart}
          >
            ADD TO CART
          </button>
        </div>

        <div
          className="flex items-center justify-center text-black text-lg flex-col
             "
        >
          <div className="flex items-center gap-[10vh]">
            <p className="font-bold text-start">Colour: </p>
            <span className="font-semibold">Blue</span>
          </div>
          <div className="flex gap-[10vh]">
            <p className="font-bold text-start">Finish Type: </p>
            <span className="font-semibold">Satin</span>
          </div>
          <div className="flex gap-[10vh]">
            <p className="font-bold text-start">Item Volume: </p>
            <span className="font-semibold">{volume}</span>
          </div>
        </div>
        <hr class="h-[2px] bg-gray-200 border-0 border-dotted dark:bg-gray-700 mx-auto w-full my-4 px-5 "></hr>

        <div className="font-semibold">
          <h1 className="font-semibold mt-10 mb-5 ">About This Item</h1>
          <p className="">
            • India’s 1st; Vastu Shastra based Water Tank Insulated Jacket. No
            More Extreme Hot Water in the Soaring Summer’s .No More Cold Water
            in the Harsh Cold Winter’s{" "}
          </p>

          <p className="">
            • 99% Prevention from Harmful UV & IR Rays.D. I. Y (Do It Yourself)
            Easy Installation Friendly Design for New & Old Water Tanks .
            American Nano Technology and European Quality Materials used{" "}
          </p>
          <p className="">
            {" "}
            • Savings on Electricity Bills from R.O’s, Heater’s and Geyser’s .
            Prevention from Harmful Bacteria’s , Fungus, Mildew, Dust and Leaf’s
            .Protect your Water Tank Lids/Covers from Flying away
          </p>

          <p classname="">
            • Protection from Monkey’s, Squirrels and Bird’s . Prevention from
            Bad Water Taste Reduction in Frequent Water Tank Cleaning
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
