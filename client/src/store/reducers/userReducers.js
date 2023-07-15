import { createSlice } from "@reduxjs/toolkit";
const userInitialState = { userInfo: null };
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});
const userReducer = userSlice.reducer;
const userAction = userSlice.actions;
export { userReducer, userAction };
