import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { counterReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  ),
);

export default store;
