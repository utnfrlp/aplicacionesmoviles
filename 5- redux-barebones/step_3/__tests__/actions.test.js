// actions.test.js

import { counterActions } from '../state/actions';
import { counter as counterInitialState } from '../state/initialState';

const {
  increaseCounter,
  decreaseCounter,
} = counterActions;

describe('counterActions', () => {
  describe('increaseCounter', () => {
    it.only('should return a type INCREASE', () => {
      expect(typeof increaseCounter).toBe('function');

      const dispatch = jest.fn();

      increaseCounter()(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'INCREASE' });
    });
  });

  describe('decreaseCounter', () => {
    it.only('should return a type DECREASE', () => {
      expect(typeof decreaseCounter).toBe('function');

      const dispatch = jest.fn();

      decreaseCounter()(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'DECREASE' });
    });
  });
});
