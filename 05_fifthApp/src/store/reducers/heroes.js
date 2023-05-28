import { actionTypes } from "./actionTypes";

const initialState = {
    heroes: [],
    heroesLoadingStatus: "idle",
    heroCreatingStatus: "idle",
    heroRemovingStatus: "idle",
  };
  
  export const heroes = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.heroesFetching:
        return {
          ...state,
          heroesLoadingStatus: "loading",
        };
      case actionTypes.heroesFetched:
        return {
          ...state,
          heroes: action.payload,
          heroesLoadingStatus: "idle",
        };
      case actionTypes.heroesFetchingError:
        return {
          ...state,
          heroesLoadingStatus: "error",
        };
  
      case actionTypes.heroeCreating:
        return {
          ...state,
          heroCreatingStatus: "loading",
        };
      case actionTypes.heroeCreated:
        return {
          ...state,
          heroes: [...state.heroes, action.payload],
          heroCreatingStatus: "idle",
        };
      case actionTypes.heroeCreatingError:
        return {
          ...state,
          heroCreatingStatus: "error",
        };
  
      case actionTypes.heroeRemoving:
        return {
          ...state,
          heroRemovingStatus: "loading",
        };
      case actionTypes.heroeRemoved:
        return {
          ...state,
          heroes: [...action.payload],
          heroRemovingStatus: "idle",
        };
      case actionTypes.heroeRemovingError:
        return {
          ...state,
          heroRemovingStatus: "error",
        };
  
      default:
        return state;
    }
  };
  