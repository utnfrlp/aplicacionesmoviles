import {
  INCREASE,
  DECREASE,
} from '../actionTypes';

import { counter as counterInitialState } from '../initialState';

// REDUCER
const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
