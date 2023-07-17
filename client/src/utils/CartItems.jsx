import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import {
  removeItem,
  setDecreaseItemQTY,
  setIncreaseItemQTY,
} from "../redux/cartReducer";

const CartItems = ({ item: { id, img, title, price, cartQuantity } }) => {
  const dispatch = useDispatch();
  const onIcreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        img,
        price,
        cartQuantity,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        img,
        price,
        cartQuantity,
      })
    );
  };
  return (
    <div key={id}>
      <div className="flex justify-between items-center bg-[#FFFFFF1A] rounded-md px-2 py-3">
        <div>
          <NavLink>
            <img src={img} className="h-[60px] w-[60px]" />
          </NavLink>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className="text-center md:text-base">{title}</p>

            <div className="flex items-center justify-around bg-slate-400 w-[20vh] sm:w-[10vh] lg:w-[15vh] mx-auto rounded-md blur-xsm shadow-md">
              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <MinusIcon
                  className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] "
                  onClick={onDecreaseItemQTY}
                />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center text-sm">
                {cartQuantity}
              </div>

              <button
                type="button"
                className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <PlusIcon
                  className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"
                  onClick={onIcreaseItemQTY}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-base">₹ {price}</h1>
          </div>
          <button onClick={() => dispatch(removeItem(id))}>
            <AiOutlineDelete className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
