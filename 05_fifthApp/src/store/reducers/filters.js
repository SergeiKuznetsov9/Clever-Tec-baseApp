import { actionTypes } from "./actionTypes";

const initialState = {
    filters: [],
    activeFilters: ["all"],
  };
  
  export const filters = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.elementOptionsFetched:
        return {
          ...state,
          filters: action.payload,
        };
  
      case actionTypes.toggleFilter:
        return {
          ...state,
          activeFilters: action.payload,
        };
  
      default:
        return state;
    }
  };
  