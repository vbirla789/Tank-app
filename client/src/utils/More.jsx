import React from "react";

const More = () => {
  return (
    <div className="w-full mt-4 ">
      <h1 className="mb-4 font-semibold text-orange-400">
        Product Information
      </h1>
      <div className="flex items-start gap-10 sm:gap-10 w-full">
        <div className="w-1/2">
          <h1 className="mb-4 sm:text-sm">Technical Details</h1>
          <table className="table-auto border-collapse w-full">
            <tbody className="sm:text-sm">
              <tr className="w-full">
                <td className="border  py-2 pl-2 bg-slate-100">Brand</td>
                <td className="border  py-2 pl-2">Generic</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Colour</td>
                <td className="border  py-2 pl-2">Blue</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Finish Type</td>
                <td className="border  py-2 pl-2">Satin</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Size</td>
                <td className="border  py-2 pl-2">1 count</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Item Volume</td>
                <td className="border  py-2 pl-2">1000 Litre</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">
                  Item Quantity
                </td>
                <td className="border  py-2 pl-2">1.00 count</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">
                  Specific Uses of Product
                </td>
                <td className="border  py-2 pl-2">Exterior</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Items Form</td>
                <td className="border  py-2 pl-2">Jacket</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Age Range</td>
                <td className="border  py-2 pl-2">Adult</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">
                  Package Information
                </td>
                <td className="border  py-2 pl-2">Tin</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Colour Code</td>
                <td className="border  py-2 pl-2">Blue</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">Coverage</td>
                <td className="border  py-2 pl-2">Large</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">
                  Item Part Number
                </td>
                <td className="border  py-2 pl-2">Tank Jacket 1000ml</td>
              </tr>
              <tr>
                <td className="border  py-2 pl-2 bg-slate-100">ASIN</td>
                <td className="border  py-2 pl-2">B0C9JDNQT6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/2">
          <h1 className="mb-4 sm:text-sm">Additional Info</h1>
          <table className="table-auto border-collapse w-full">
            <tbody className="sm:text-sm">
              <tr className="">
                <td className="border py-2 pl-2 bg-slate-100">Item Weight</td>
                <td className="border pl-2 py-2">8 kg</td>
              </tr>
              <tr>
                <td className="border pl-2 py-2 bg-slate-100">
                  Item Dimension
                </td>
                <td className="border pl-2 py-2">122 X 26 X 51</td>
              </tr>
              <tr>
                <td className="border pl-2 py-2 bg-slate-100">Item Quantity</td>
                <td className="border pl-2 py-2">1.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default More;
