import axios from "axios";
const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

export const addFavorites = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const response = (await axios.post(endpoint, character)).data;
      return dispatch({
        type: ADD_FAVORITES,
        payload: response,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const deleteFavorites = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const response = (await axios.delete(endpoint)).data;
      return dispatch({
        type: DELETE_FAVORITES,
        payload: response,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
export { ADD_FAVORITES, DELETE_FAVORITES };
