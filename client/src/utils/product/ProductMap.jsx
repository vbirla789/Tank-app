import React, { useState, useEffect } from "react";
import ProductData from "./ProductData";
import { useParams } from "react-router";

const ProductMap = ({ items }) => {
  console.log(items);

  const [data, setData] = useState([items]);
  const { id } = useParams();

  const compare = () => {
    let compareProductsData = items.filter((e) => {
      return e.id == id;
    });
    setData(compareProductsData);
  };

  useEffect(() => {
    compare();
  }, [id]);
  console.log(data);

  return (
    <div>
      {" "}
      {items.map((val, i) => (
        <ProductData {...val} />
      ))}
    </div>
  );
};

export default ProductMap;
