import { combineReducers } from "redux";
import addToFavouritesReducer from "./favouritesReducer";
export default combineReducers({
  favouritesReducer: addToFavouritesReducer,
});
