import { actionTypes } from "../reducers/actionTypes";

export const optionsFetched = (options) => ({
  type: actionTypes.elementOptionsFetched,
  payload: options,
});

export const toggleFilter = (filter) => ({
  type: actionTypes.toggleFilter,
  payload: filter,
});
