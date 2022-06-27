export const addToFavourites = (payload) => {
  return {
    type: "ADD_TO_FAVOURITES",
    payload,
  };
};

export const removeFromFavourites = (payload) => {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload,
  };
};
