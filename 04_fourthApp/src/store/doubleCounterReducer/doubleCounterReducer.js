import { ACTION_TYPES } from "../actionTypes";

export const doubleCounterInitialState = {
  counter1: 0,
  counter2: 0,
};

export const doubleCounterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT1:
      return { ...state, counter1: state.counter1 + 1 };

    case ACTION_TYPES.DECREMENT1:
      return { ...state, counter1: state.counter1 - 1 };

    case ACTION_TYPES.INCREMENT2:
      return { ...state, counter2: state.counter2 + 1 };

    case ACTION_TYPES.DECREMENT2:
      return { ...state, counter2: state.counter2 - 1 };

    case ACTION_TYPES.SET_VALUE:
      return { ...state, counter2: action.payload };

    default:
      return state;
  }
};
