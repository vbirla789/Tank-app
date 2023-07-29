import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../redux/cartReducer";

const Address = () => {
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      console.log("What the hack!!");
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
  };
  return (
    <div className="container mx-auto p-4 pt-[14vh]">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Address Details</h2>
        <form onSubmit={shippingSubmit}>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block font-medium mb-1">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your country"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="state" className="block font-medium mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your state"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pincode" className="block font-medium mb-1">
              Pin Code
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your pin code"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block font-medium mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your city"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            type="submit"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Address;
