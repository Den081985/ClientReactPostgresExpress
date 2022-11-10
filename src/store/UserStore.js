import { SET_AUTH, SET_USER } from "./types";

const initialState = false;

const UserStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default UserStoreReducer;
