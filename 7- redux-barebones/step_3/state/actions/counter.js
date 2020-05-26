import * as actionTypes from '../actionTypes';

// ACTION CREATORS
export const increaseCounter = () => (dispatch) => {
  setTimeout(
    () => dispatch({ type: actionTypes.INCREASE }),
    1000,
  );
};

export const decreaseCounter = () => (dispatch) => {
  setTimeout(
    () => dispatch({ type: actionTypes.DECREASE }),
    1000,
  );
};
