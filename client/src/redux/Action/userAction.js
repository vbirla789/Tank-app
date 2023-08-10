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

    document.cookie = `token=${
      data.token
    }; Domain=www.watertankdoctor.com; Path=/; Expires=${new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ).toUTCString()}; HttpOnly`;

    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    // localStorage.setItem("token", data.token);

    // const token = localStorage.getItem("token");
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

    const config = {
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
    const config = {
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
