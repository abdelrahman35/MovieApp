const INTIAL_STATE = {
  favouriteMovies: [],
};

export default function addToFavouritesReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.payload],
      };
    case "REMOVE_FROM_FAVOURITES":
      const deletedMovie = action.payload;
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter(
          (movie) => movie.id !== deletedMovie.id
        ),
      };
    default:
      return state;
  }
}
