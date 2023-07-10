import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducers/countReducers";
const store = configureStore({
  reducer: {
    // here we need to pass some slicer or reducer
    count: countReducer,
  },
});

export default store;
