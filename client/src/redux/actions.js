import axios from "axios";
const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

//!eliminamos esta funcion para hw de express
// const addFavorites = (character) => {
//   return {
//     type: ADD_FAVORITES,
//     payload: character,
//   };
// };

//! Copiamos la funcion que ellos nos dan en el hw:
// ACTION | addFav
const addFavorites = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    });
  };
};

//!eliminamos esta funcion para hw de express

// const deleteFavorites = (id) => {
//   return {
//     type: DELETE_FAVORITES,
//     payload: id,
//   };
// };

//! Copiamos la funcion que ellos nos dan en el hw:
// ACTION | removeFav
const deleteFavorites = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data.data,
      });
    });
  };
};


export { ADD_FAVORITES, addFavorites, DELETE_FAVORITES, deleteFavorites };
