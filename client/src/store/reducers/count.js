import { createSlice } from "@reduxjs/toolkit";
// creation du slice
const cptState = { number: 0 };
const countSlice = createSlice({
  name: "compteur",
  initialState: cptState,
  reducers: {
    countChange(state, action) {
      state.number = action.payload;
    },
  },
});

const cptReducer = countSlice.reducer;
const cptActions = countSlice.actions;
export { cptReducer, cptActions };
