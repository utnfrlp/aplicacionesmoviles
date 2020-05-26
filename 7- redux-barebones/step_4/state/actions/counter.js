import * as actionTypes from '../actionTypes';

export const increaseCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.INCREASE,
    selected: index,
  });
};

export const decreaseCounter = index => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DECREASE,
    selected: index,
  });
};

export const addCounter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_COUNTER,
  });
};

export const removeCounter = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_COUNTER,
  });
};
