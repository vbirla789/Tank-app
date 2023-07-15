import React from "react";

const Img = ({ img }) => {
  return (
    <div>
      <img src={img} alt="Product" className="w-[80vh]" />
    </div>
  );
};

export default Img;
