import { useState } from "react";
import style from "./SearchBar.module.css"


function SearchBar(props) {
   const [id, setIde] = useState ("")

   const handleChange = (event) => {
      setIde (event.target.value)
   }

   const handleKeyPress = (event) => {
      if (event.key==='Enter') {
         props.onSearch(id)
         
      }
   }

   return (
      <div className={style.searchBar}>
         <input className={style.input1} type='search' onChange={handleChange} onKeyPress={handleKeyPress}/>
         <button className={style.button1} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar