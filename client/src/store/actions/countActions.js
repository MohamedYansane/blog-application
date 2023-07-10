import { countActions } from "../reducers/countReducers";
// we're creation a function that will return another function like
//my exercice in scala. In the second function we're giving a dispatch
//and we gonna use thunk to passs and take the dispatch  from second function
//And then the second one we gonna get the entire state with  getState
export const changeCount = (type) => (dispatch, getState) => {
  // here i wanna pull out the count state from the get state
  const { count } = getState();
  //so if type === to increase we gonna dispatch the actions
  // i've to import my countActions
  if (type === "INCREASE") {
    //the parameters inside the countChange here is a payload
    dispatch(countActions.countChange(count.number + 1));
  } else {
    dispatch(countActions.countChange(count.number - 1));
  }
};
