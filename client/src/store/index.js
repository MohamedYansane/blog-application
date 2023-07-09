import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    // here we need to pass some slicer or reducer
  },
});
export default store;
