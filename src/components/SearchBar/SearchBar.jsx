import { useState } from "react";
import style from "./SearchBar.module.css"


function SearchBar(props) {
   const [id, setIde] = useState ("")

   const handleChange = (event) => {
      setIde (event.target.value)
   }



   return (
      <div className={style.searchBar}>
         <input className={style.input1} type='search' onChange={handleChange} />
      <button className={style.button1} onClick={props.onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar