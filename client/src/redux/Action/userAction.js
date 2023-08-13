import { toast } from "react-hot-toast";
import {
  CLEAR_ERRORS,
  LOAD_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
} from "../Constant/userContant";

import axios from "axios";

// login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      "https://ecommerce-app-slah.onrender.com/api/v1/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    if (data.token) {
      localStorage.setItem("watertankauthtoken", data.token);
    }

    toast.success(`Logged In Successfully`);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      "https://ecommerce-app-slah.onrender.com/api/v1/register",
      userData,
      config
    );
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    toast.success(`User Registered Successfully`);
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOAD USER
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REQUEST });

    const token = localStorage.getItem("watertankauthtoken");

    // console.log(`token addded ${token}`);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      "https://ecommerce-app-slah.onrender.com/api/v1/me",
      config
    );

    dispatch({ type: LOAD_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOGOUT USER
export const logout = () => async (dispatch) => {
  try {
    await axios.post("https://ecommerce-app-slah.onrender.com/api/v1/logout");

    dispatch({ type: LOGOUT_SUCCESS });

    toast.success(`Logged out Successfully`);
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("watertankauthtoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      withCredentials: true,
    };

    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axios.get(
      "https://ecommerce-app-slah.onrender.com/api/v1/admin/users",
      config
    );

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
