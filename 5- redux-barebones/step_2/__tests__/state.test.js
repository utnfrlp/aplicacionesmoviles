// state.test.js

import { increaseCounter, decreaseCounter, counterReducer } from '../state/counter';

// ACTION TYPES
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

describe('counterActions', () => {
  describe('increaseCounter', () => {
    it('should return a type INCREASE', () => {
      expect(typeof increaseCounter).toBe('function');
      expect(increaseCounter().type).toBe(INCREASE);
    });
  });

  describe('decreaseCounter', () => {
    it('should return a type DECREASE', () => {
      expect(typeof decreaseCounter).toBe('function');
      expect(decreaseCounter().type).toBe(DECREASE);
    });
  });
});

describe('counterReducer', () => {
  it('should increase counter from 0 to 1', () => {
    const action = { type: INCREASE };
    const state = 0;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(1);
  });

  it('should increase counter from 1 to 2', () => {
    const action = { type: INCREASE };
    const state = 1;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(2);
  });

  it('should decrease counter from 2 to 1', () => {
    const action = { type: DECREASE };
    const state = 2;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(1);
  });

  it('should decrease counter from 1 to 0', () => {
    const action = { type: DECREASE };
    const state = 1;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(0);
  });

  it('should do nothing if an unknown type is received', () => {
    const action = { type: 'UNKNOWN' };
    const state = 0;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(0);
  });

  it('should inicialize the state object if undefined state is received', () => {
    const action = {};
    const state = undefined;
    const newState = counterReducer(state, action);

    expect(newState).toEqual(0);
  });
});
