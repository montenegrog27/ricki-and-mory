import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"

function NavBar(props) {
    return (
    <div className={style.NavBar}>
        <SearchBar onSearch = {props.onSearch}/>
    </div>
    )
}

export default NavBar