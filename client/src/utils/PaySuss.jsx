import React from "react";
import { useSearchParams } from "react-router-dom";

const PaySuss = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div className="flex items-center justify-center min-h-[100vh] flex-col">
      <h1 className="text-2xl font-semibold">Order Successfull</h1>
      <h1 className="text-slate-600">Reference No. {referenceNum}</h1>
    </div>
  );
};

export default PaySuss;
