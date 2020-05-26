// actions.test.js

import { counterActions } from '../state/actions';
import { counter as counterInitialState } from '../state/initialState';

const {
  increaseCounter,
  decreaseCounter,
  addCounter,
  removeCounter,
} = counterActions;

describe('counterActions', () => {
  describe('increaseCounter', () => {
    it.only('should return a type INCREASE and selected 0', () => {
      expect(typeof increaseCounter).toBe('function');

      const dispatch = jest.fn();

      increaseCounter(0)(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'INCREASE', selected: 0 });
    });
  });

  describe('decreaseCounter', () => {
    it.only('should return a type DECREASE and selected 0', () => {
      expect(typeof decreaseCounter).toBe('function');

      const dispatch = jest.fn();

      decreaseCounter(0)(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'DECREASE', selected: 0 });
    });
  });

  describe('addCounter', () => {
    it.only('should return a type ADD_COUNTER', () => {
      expect(typeof addCounter).toBe('function');

      const dispatch = jest.fn();

      addCounter(0)(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_COUNTER' });
    });
  });

  describe('removeCounter', () => {
    it.only('should return a type REMOVE_COUNTER', () => {
      expect(typeof removeCounter).toBe('function');

      const dispatch = jest.fn();

      removeCounter(0)(dispatch, counterInitialState);
      expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_COUNTER' });
    });
  });
});
