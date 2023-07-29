import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./Reducer/userReducer";
import { newOrderReducer } from "./Reducer/orderReducer";

export default configureStore({
  reducer: { cart: cartReducer, user: userReducer, newOrder: newOrderReducer },
});
