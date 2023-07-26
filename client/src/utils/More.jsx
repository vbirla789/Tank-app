import React from "react";

const More = () => {
  return (
    <div className="w-full mt-4">
      <h1 className="mb-4 font-semibold text-orange-400">
        Product Information
      </h1>
      <div className="flex items-start justify-between w-full">
        <div className="w-full">
          <h1 className="mb-4">Technical Details</h1>
          <table className="table-auto border-collapse">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Brand</td>
                <td className="border px-4 py-2">Generic</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Colour</td>
                <td className="border px-4 py-2">Blue</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Finish Type</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Size</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Item Volume</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Item Quantity</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Specific Uses of Product</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Items Form</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Age Range</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Package Information</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Colour Code</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Coverage</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Item Part Number</td>
                <td className="border px-4 py-2">Satin</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <h1 className="mb-4">Additional information</h1>
          <table className="table-auto border-collapse">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Item Weight</td>
                <td className="border px-4 py-2">8 kg</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Item Dimension</td>
                <td className="border px-4 py-2">122 X 26 X 51</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Item Quantity</td>
                <td className="border px-4 py-2">1.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default More;
