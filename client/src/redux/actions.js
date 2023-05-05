const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
};
const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

export { ADD_FAVORITES, addFavorites, DELETE_FAVORITES, deleteFavorites };
