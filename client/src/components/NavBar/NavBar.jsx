import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import Portada from "../Portada/Portada";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <div className={style.nav}>
        <Link to="/home" className={style.home}>
          Home
        </Link>
        <Link to="/favorites" className={style.favorites}>
          Fav
        </Link>
        <Link to="/about" className={style.about}>
          About
        </Link>
        <Link to="/logout" className={style.logout}>
          Logout
        </Link>
      </div>
      <div className={style.Portada}>
        <Portada />
      </div>
      <div className={style.searchBar}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}

export default NavBar;
