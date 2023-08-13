import {
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  NEW_REVIEW_REQUEST,
  ALL_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  CLEAR_ERRORS,
} from "../Constant/reviewContant";
import toast from "react-hot-toast";
import axios from "axios";

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const token = localStorage.getItem("watertankauthtoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      withCredentials: true,
    };

    const { data } = await axios.put(
      "https://ecommerce-app-slah.onrender.com/api/v1/review",
      reviewData,
      config
    );

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data,
    });
    toast.success(`Review Added`);
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Product
// Action creator using Redux Thunk
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const config = {
      withCredentials: true,
    };

    const response = await axios.get(
      `https://ecommerce-app-slah.onrender.com/api/v1/reviews?id=64d10732c23ba6af08a46363`,
      config
    );
    const reviews = response.data.reviews;

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
