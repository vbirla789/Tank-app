import React from "react";

const ProductData = ({ product: { _id, name, price, stock } }) => {
  return (
    <div key={_id}>
      <div className="flex justify-between items-center bg-slate-200 mb-2 rounded-3xl px-3 py-2 ">
        <span>{_id}</span>
        <h1>{name}</h1>
        <p>₹{price}</p>
        <p>{stock}</p>
      </div>
    </div>
  );
};

export default ProductData;
