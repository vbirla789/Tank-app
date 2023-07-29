import { createSlice } from "@reduxjs/toolkit";
import { item } from "../data/data";

const initialState = {
  products: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
  productData: item,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
      const removeItem = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = removeItem;
    },
    resetCart: (state, action) => {
      state.products = [];
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.products.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.products[itemIndex].cartQuantity += 1;
      }
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].cartQuantity > 1) {
        state.products[itemIndex].cartQuantity -= 1;
      }
    },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;

      localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
    },
  },
});

export const {
  addToCart,
  removeItem,
  resetCart,
  getTotals,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  saveShippingInfo,
} = counterSlice.actions;

export default counterSlice.reducer;
