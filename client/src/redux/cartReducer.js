import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
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
      let { totalAmount } = state.products.reduce(
        (cartTotal, product) => {
          const { price } = product;

          const totalPrice = price;

          cartTotal.totalAmount += totalPrice;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
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
  },
});

export const {
  addToCart,
  removeItem,
  resetCart,
  getTotals,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} = counterSlice.actions;

export default counterSlice.reducer;
