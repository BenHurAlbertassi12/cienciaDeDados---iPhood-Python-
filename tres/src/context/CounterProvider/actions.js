import * as types from './types';

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.INCREEMENT_COUTER });
};

export const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER });
};
