import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import Portada from "../Portada/Portada";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

function NavBar(props) {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      // Redirige al usuario a la página de inicio o a donde desees después del cierre de sesión.
      // Por ejemplo, puedes redirigirlo a la página de inicio ("/") o a una página de despedida.
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
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
        <Link to="/" className={style.logout} onClick={handleSignOut}>
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
