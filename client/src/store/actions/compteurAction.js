import { cptActions } from "../reducers/count";
export const changeCompteur = (type) => (dispatch, getState) => {
  const { count } = getState();
  if (type === "increase") {
    dispatch(cptActions.countChange(count.number + 1));
  } else {
    dispatch(cptActions.countChange(count.number - 1));
  }
};
