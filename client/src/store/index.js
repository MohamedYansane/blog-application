import { configureStore } from "@reduxjs/toolkit";
//import { countReducer } from "./reducers/countReducers";
import { userReducer } from "./reducers/userReducers";
// if there's data we get it or return null
const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;
const initialState = {
  // the user has a initial  value of object that
  // has userInfo with initial sate the userINFO FROM STORAGE
  user: { userInfo: userInfoFromStorage },
};
const store = configureStore({
  reducer: {
    // here we need to pass some slicer or reducer
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
