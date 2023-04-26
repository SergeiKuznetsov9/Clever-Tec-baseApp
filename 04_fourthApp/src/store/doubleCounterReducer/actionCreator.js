import { ACTION_TYPES } from "../actionTypes";

export const increment1 = () => ({ type: ACTION_TYPES.INCREMENT1 });
export const decrement1 = () => ({ type: ACTION_TYPES.DECREMENT1 });
export const increment2 = () => ({ type: ACTION_TYPES.INCREMENT2 });
export const decrement2 = () => ({ type: ACTION_TYPES.DECREMENT2 });
export const setValue = (payload) => ({
  type: ACTION_TYPES.SET_VALUE,
  payload,
});
