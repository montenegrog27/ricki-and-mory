import { ADD_FAVORITES, DELETE_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //!Eliminiamos mi caso ADD_FAVORITES para hw de express
    // case ADD_FAVORITES:
    //   return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    //!Copiamos el caso ADD_FAV que ellos nos dan:
    // case ADD_FAVORITES:
    //   return {
    //     ...state,
    //     myFavorites: action.payload,
    //     allCharacters: action.payload,
    //   };
    //! Modificando lo q nos pasaron en hw
    case ADD_FAVORITES:
      // return {
      //   ...state,
      //   myFavorites: [...state.myFavorites, action.payload],
      //   allCharacters: action.payload,
      // }; Cambio por el de sol
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    //!Eliminiamos mi caso DELETE_FAVORITES para hw de express
    // case DELETE_FAVORITES:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };
    //!Copiamos el caso delete_fav que ellos nos dan:
    // REDUCER | REMOVE_FAV
    case DELETE_FAVORITES:
      // return { ...state, myFavorites: action.payload }; cambio por el de sol
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
