import { applyMiddleware, combineReducers, createStore } from "redux";
import navigationsReducer from "./navigations-reducer";
import thunkMiddleware from "redux-thunk";
import serviceListReducer from "./service-list-reducer";
import favoritesReducer from "./favorites-reducer";

let reducers = combineReducers({
  navigationsData: navigationsReducer,
  serviceListData: serviceListReducer,
  favoritesData: favoritesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
