import { ACTION_TYPES } from "../actionTypes";

export const singleCounterInitialState = 0;

export const singleCounterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + 1;

    case ACTION_TYPES.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};
