import {
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constant/productContant.js";

import axios from "axios";

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const token = localStorage.getItem("watertankauthtoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      "https://ecommerce-app-slah.onrender.com/api/v1/admin/products",
      config
    );

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
