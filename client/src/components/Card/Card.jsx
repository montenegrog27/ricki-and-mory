import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();
  const { character, onClose, myFavorites } = props;

  const id = character.id;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  useEffect(() => {
    if (myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  //?crear funcion handleFavorite aca:
  function handleFavorite() {
    if (isFav === true) {
      dispatch(deleteFavorites(character.id));
      setIsFav(false);
    } else {
      dispatch(addFavorites(character));
      setIsFav(true);
    }
  }

  return (
    <div className={style.componente}>
      {isFav ? ( //cuando es true se ejecuta handleFavorite
        <button className={style.botFavOn} onClick={() => handleFavorite()}>
          ❤️
        </button>
      ) : (
        <button className={style.botFavOff} onClick={() => handleFavorite()}>
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
      <Link to={`/detail/${id}`} className={style.link}>
        <div className={style.atributes}>
          <h2 className={style.cardName}>Name: {character.name}</h2>

          <h2>Species:{character.species}</h2>
          <h2>Gender:{character.gender}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFavorites: (character) => dispatch(addFavorites(character)),
//     deleteFavorites: (id) => dispatch(deleteFavorites(id)),
//   };
// };

export default connect(mapStateToProps)(Card);
