import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const id = 1;
const img =
  "https://firebasestorage.googleapis.com/v0/b/pers-f1679.appspot.com/o/tnakii.png?alt=media&token=140f940a-2a8c-49a7-a04f-21d26d433f67";
const title = "EXTREME COVER| 750 litre";
const price = 1000;

const Product = () => {
  const dispatch = useDispatch();

  const addCart = () => {
    const item = { id, img, title, price };
    dispatch(addToCart(item));
  };
  return (
    <div className="flex justify-center items-center py-[15vh] lg:flex-col">
      <div className="mx-auto bg-white flex md:flex-col justify-around w-full">
        <div className="flex items-center justify-center">
          <img src={img} alt="Product" className="w-[80vh]" />
        </div>
        <div className="px-6 flex flex-col bg-blue-100 rounded-md py-10 lg:w-[80%] mx-auto w-[60%]">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="mb-2">
            M.R.P<span> ${price}</span>
          </p>
          <h1 className="mb-1">Description</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="mb-1">About this item</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            className="color text-white rounded mt-4 py-1 lg:w-[50%] w-[30%]"
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
