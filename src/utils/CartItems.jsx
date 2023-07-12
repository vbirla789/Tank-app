import React from "react";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { removeItem } from "../redux/cartReducer";

const CartItems = ({ item: { id, img, title } }) => {
  const dispatch = useDispatch();
  return (
    <div key={id}>
      <div className="flex justify-between items-center">
        <div>
          <NavLink>
            <img src={img} className="h-[50px] w-[50px]" />
          </NavLink>
        </div>
        <div>
          <h1>{title}</h1>
          <div>
            <p>$55</p>
          </div>
        </div>
        <div>
          <button onClick={() => dispatch(removeItem(id))}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
