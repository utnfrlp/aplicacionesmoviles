import {
  INCREASE,
  DECREASE,
} from './actionTypes';

// ACTION CREATORS
export const increaseCounter = () => {
  return { type: INCREASE };
};

export const decreaseCounter = () => {
  return { type: DECREASE };
};

// acciones asíncronas, para simular petición a una API
// export const increaseCounter = () => (dispatch) => {
//   setTimeout(
//     () => dispatch({ type: INCREASE }),
//     1000,
//   );
// };
// 
// export const decreaseCounter = () => (dispatch) => {
//   setTimeout(
//     () => dispatch({ type: DECREASE }),
//     1000,
//   );
// };