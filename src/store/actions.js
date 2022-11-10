import { SET_AUTH, SET_USER } from "./types";

export const setIsAuth = (value) => ({
  type: SET_AUTH,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
