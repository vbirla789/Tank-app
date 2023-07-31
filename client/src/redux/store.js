import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./Reducer/userReducer";
import { myOrdersReducer, newOrderReducer } from "./Reducer/orderReducer";
import { newReviewReducer } from "./Reducer/reviewReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    newReview: newReviewReducer,
  },
});
