import { createStore } from 'redux';

// ACTION TYPES
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// INITIAL STATE
const counterInitialState = 0;

// ACTION CREATORS
export const increaseCounter = () => ({
  type: INCREASE,
});

export const decreaseCounter = () => ({
  type: DECREASE,
});

// REDUCER
export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

// STORE
export const store = createStore(counterReducer);
