import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const { character, onClose, addFavorites, deleteFavorites, myFavorites } =
    props;

  const id = character.id; //lo agregue con pol
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  //?crear funcion handleFavorite aca:
  function handleFavorite(data) {
    if (isFav === true) {
      deleteFavorites(data);
      setIsFav(false);
    } else {
      addFavorites(data);
      setIsFav(true);
    }
  }

  return (
    <div className={style.componente}>
      {isFav ? (
        <button
          className={style.botFavOn}
          onClick={() => handleFavorite(character.id)}
        >
          ❤️
        </button>
      ) : (
        <button
          className={style.botFavOff}
          onClick={() => handleFavorite(character)}
        >
          🤍
        </button>
      )}
      <div className={style.imagen}>
        {<img src={character.image} alt={""} className={style.imge} />}
        {closeBtn ? (
          <button
            className={style.button}
            onClick={() => onClose(character.id)}
          >
            X
          </button>
        ) : null}
      </div>
      <div className={style.atributes}>
        <Link to={`/detail/${id}`} className={style.link}>
          {/* <Link to={`/detail/${character.id}`} className={style.link}>//cambio por id */}
          <h2 className={style.cardName}>Name: {character.name}</h2>
        </Link>

        <h2>Species:{character.species}</h2>
        <h2>Gender:{character.gender}</h2>
      </div>
    </div>
  );
}

const maapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => dispatch(addFavorites(character)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
};

export default connect(maapStateToProps, mapDispatchToProps)(Card);
