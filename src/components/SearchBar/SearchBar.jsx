import style from "./SearchBar.module.css"

function SearchBar(props) {
   return (
      <div className={style.searchBar}>
         <input className={style.input1} type='search' />
      <button className={style.button1} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar