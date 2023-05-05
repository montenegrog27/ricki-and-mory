import { Link } from "react-router-dom";
import style from "../views/Favorites.module.css";
import { connect } from "react-redux";
import Cards from "../components/Cards/Cards";

function Favorites({ myFavorites }) {
  return (
    <>
      <div className={style.nav}>
        <Link to="/home" className={style.home}>
          Home
        </Link>
        <Link to="/favorites" className={style.fav}>
          Fav
        </Link>
        <Link to="/about" className={style.about}>
          About
        </Link>
        <Link to="/logout" className={style.logout}>
          Logout
        </Link>
      </div>
      <div className={style.cards}>
        <Cards characters={myFavorites} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
