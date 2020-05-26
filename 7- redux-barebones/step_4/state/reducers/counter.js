import {
  INCREASE,
  DECREASE,
  ADD_COUNTER,
  REMOVE_COUNTER,
} from '../actionTypes';

import { counter as counterInitialState } from '../initialState';

const counterReducer = (state = counterInitialState, action) => {
  const { items } = state;
  const { selected } = action;
  let newItems;

  switch (action.type) {
    case INCREASE:
      newItems = [
        ...items.slice(0, selected),
        items[selected] + 1,
        ...items.slice(selected + 1),
      ];

      return {
        ...state,
        selected,
        items: newItems,
      };
    case DECREASE:
      newItems = [
        ...items.slice(0, selected),
        items[selected] - 1,
        ...items.slice(selected + 1),
      ];

      return {
        ...state,
        selected,
        items: newItems,
      };
    case ADD_COUNTER:
      newItems = [
        ...items,
        0, // this is a new item
      ];

      return {
        ...state,
        items: newItems,
      };
    case REMOVE_COUNTER:
      // remove the last item
      newItems = [
        ...items.slice(0, items.length - 1),
      ];

      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default counterReducer;
