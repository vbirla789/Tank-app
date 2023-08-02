import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./Reducer/userReducer";
import { myOrdersReducer, newOrderReducer } from "./Reducer/orderReducer";
import {
  newReviewReducer,
  productReviewsReducer,
} from "./Reducer/reviewReducer";
import { productsReducer } from "./Reducer/productReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    newReview: newReviewReducer,
    allReview: productReviewsReducer,
    products: productsReducer,
  },
});
