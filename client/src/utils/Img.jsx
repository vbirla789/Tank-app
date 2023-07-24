import React from "react";

const Img = ({ img }) => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={img} alt="Product" className="w-[70%] sm:w-full" />
      </div>
    </div>
  );
};

export default Img;
