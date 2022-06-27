import { combineReducers } from "redux";
import addToFavouritesReducer from "./favouritesReducer";
import moviesReducer from "./moviesReducer";
export default combineReducers({
  favouritesReducer: addToFavouritesReducer,
  movies: moviesReducer,
});
