import axios from "axios";

import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    // using the browsers local storage
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email in use",
    });
  }

  // adding redux thunk allows our action creators to return action objects OR functions
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    // using the browsers local storage
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login credentials",
    });
  }

  // adding redux thunk allows our action creators to return action objects OR functions
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};

// action creator returns an action function
// funneled by dispatch function into our middleware
