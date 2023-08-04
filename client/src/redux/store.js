import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { userReducer, allUsersReducer } from "./Reducer/userReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderReducer,
} from "./Reducer/orderReducer";
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
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers: allUsersReducer,
  },
});
