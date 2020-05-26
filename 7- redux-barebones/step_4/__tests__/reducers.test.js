// reducers.test.js

import {
  INCREASE,
  DECREASE,
  ADD_COUNTER,
  REMOVE_COUNTER,
} from '../state/actionTypes';

import counterReducer from '../state/reducers/counter';

describe('counterReducer', () => {
  it('should increase a selected counter from 0 to 1', () => {
    const action = {
      type: INCREASE,
      selected: 0,
    };

    const state = {
      selected: 0,
      items: [0],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(1);
  });

  it('should increase a selected counter from 1 to 2', () => {
    const action = {
      type: INCREASE,
      selected: 0,
    };

    const state = {
      selected: 0,
      items: [1],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(2);
  });

  it('should decrease a selected counter from 2 to 1', () => {
    const action = {
      type: DECREASE,
      selected: 0,
    };

    const state = {
      selected: 0,
      items: [2],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(1);
  });

  it('should decrease a selected counter from 1 to 0', () => {
    const action = {
      type: DECREASE,
      selected: 0,
    };

    const state = {
      selected: 0,
      items: [1],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(0);
  });

  it('should do nothing if an unknown type is received', () => {
    const action = {
      type: 'UNKNOWN',
      selected: 0,
    };

    const state = {
      selected: 0,
      items: [0],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(0);
  });

  it('should inicialize the state object if undefined state is received', () => {
    const action = {};
    const state = undefined;

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(null);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(0);
  });

  it('should add a second counter', () => {
    const action = {
      type: ADD_COUNTER,
    };

    const state = {
      selected: 0,
      items: [5],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(0);
    expect(newState.items.length).toEqual(2);
    expect(newState.items[0]).toEqual(5);
    expect(newState.items[1]).toEqual(0);
  });

  it('should add a third counter', () => {
    const action = {
      type: ADD_COUNTER,
    };

    const state = {
      selected: 1,
      items: [5, 12],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(1);
    expect(newState.items.length).toEqual(3);
    expect(newState.items[0]).toEqual(5);
    expect(newState.items[1]).toEqual(12);
    expect(newState.items[2]).toEqual(0);
  });

  it('should remove the last counter', () => {
    const action = {
      type: REMOVE_COUNTER,
    };

    const state = {
      selected: 1,
      items: [5, 12, 0],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(1);
    expect(newState.items.length).toEqual(2);
    expect(newState.items[0]).toEqual(5);
    expect(newState.items[1]).toEqual(12);
    expect(newState.items[2]).toEqual(undefined);
  });

  it('should remove the last counter again', () => {
    const action = {
      type: REMOVE_COUNTER,
    };

    const state = {
      selected: 1,
      items: [5, 12],
    };

    const newState = counterReducer(state, action);

    expect(newState.selected).toEqual(1);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0]).toEqual(5);
    expect(newState.items[1]).toEqual(undefined);
    expect(newState.items[2]).toEqual(undefined);
  });
});
