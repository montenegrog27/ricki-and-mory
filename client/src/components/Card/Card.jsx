import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, addFavorites, deleteFavorites, myFavorites } =
    props;

  console.log("CHARACTER.ID:", character.id);

  const id = character.id;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
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
      {isFav ? ( //cuando es true se ejecuta handleFavorite
        <button className={style.botFavOn} onClick={() => handleFavorite(id)}>
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
        {closeBtn ? (
          <button
            className={style.button}
            onClick={() => onClose(character.id)}
          >
            X
          </button>
        ) : null}
        {<img src={character.image} alt={""} className={style.imge} />}
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
