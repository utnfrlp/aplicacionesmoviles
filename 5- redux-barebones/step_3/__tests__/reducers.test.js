// reducers.test.js

import {
  INCREASE,
  DECREASE,
} from '../state/actionTypes';

import counterReducer from '../state/reducers/counter';

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
