import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./Reducer/userReducer";
import { myOrdersReducer, newOrderReducer } from "./Reducer/orderReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
  },
});
