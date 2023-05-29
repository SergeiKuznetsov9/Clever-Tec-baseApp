import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { heroes } from "../store/reducers/heroes";
import { filters } from "../store/reducers/filters";
import ReduxThunk from 'redux-thunk';

const store = createStore(  
  combineReducers({heroes, filters}),
  applyMiddleware(ReduxThunk),
);

export default store;
