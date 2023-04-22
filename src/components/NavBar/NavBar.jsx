import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"
import Portada from "../Portada/Portada"

function NavBar(props) {
    return (
    <div className={style.NavBar}>
        <div className={style.Portada}>
            <Portada />
        </div>
        <div className={style.searchBar}>
            <SearchBar onSearch = {props.onSearch}/>
        </div>
    </div>
    )
}

export default NavBar