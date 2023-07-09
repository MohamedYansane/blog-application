// this file is just to show how reducer is used
import { createSlice } from "@reduxjs/toolkit";
const countInitialSate = { number: 0 };
// we're creating a slice here and a slice has always a name,
//initialState, reducers property also
const countSlice = createSlice({
  name: "Count",
  initialState: countInitialSate,
  //in our reducers here we need to pass our actions
  // ur state here is number when never we called the reducers countChange
  reducers: {
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});
// with countActions we've access to the actions in countSlice it means countChange
const countActions = countSlice.actions;

const countReducer = countSlice.reducer;

export { countReducer, countActions };
