import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";

function Card(props) {
  const { character, onClose, addFavorites, deleteFavorites } = props;
  const id = character.id; //lo agregue con pol

  const [isFav, setIsFav] = useState(false);

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
        <button onClick={() => handleFavorite(character.id)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(character)}>🤍</button>
      )}
      <div className={style.imagen}>
        {<img src={character.image} alt={""} className={style.imge} />}
        {
          <button
            className={style.button}
            onClick={() => onClose(character.id)}
          >
            X
          </button>
        }
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
// const maapStateToProps = (state) => {
//   myFavorites: state.myFavorites;
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => dispatch(addFavorites(character)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
