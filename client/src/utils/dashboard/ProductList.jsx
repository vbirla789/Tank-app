import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { clearErrors, getAdminProduct } from "../../redux/Action/productAction";
import ProductData from "./ProductData";

const ProductList = () => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);

  //   console.log(products);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getAdminProduct());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-6 gap-4 min-h-[100vh] pt-[15vh]">
      <Sidebar />
      <div className="col-span-5 px-10">
        <h1 className="text-3xl font-semibold text-center mb-5">Products</h1>
        <div className="flex justify-around items-center mb-5 bg-slate-300 px-3 rounded-3xl py-3 font-semibold">
          <span>id</span>
          <h1>name</h1>
          <p>price</p>
          <p>stock</p>
        </div>
        {products.map((product, id) => (
          <ProductData product={product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
