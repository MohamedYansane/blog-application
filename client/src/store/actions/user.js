// we're creation a function that will return another function like
//my exercice in scala. In the second function we're giving a dispatch
//and we gonna use thunk to passs and take the dispatch  from second function

import { userAction } from "../reducers/userReducers";

//And then the second one we gonna get the entire state with  getState
export const logout = () => (dispatch) => {
  //here we 've to dispatch our action
  dispatch(userAction.resetUserInfo());
  localStorage.removeItem("account");
};
