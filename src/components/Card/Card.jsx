import style from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card(props) {
   const {character, onClose} = props

   return (
      <div className={style.componente}>
         <div className={style.imagen}>
         { <img src={character.image} alt={""} className={style.imge}/> }  
            {<button className={style.button} onClick={() => onClose(character.id)}>
          X
        </button>}


         </div>
         <div className={style.atributes}>
         <Link to={`/detail/${character.id}`} >
            <h2 className={style.cardName}>Name: {character.name}</h2>
         </Link>
            
            <h2>Species:{character.species}</h2>
            <h2>Gender:{character.gender}</h2>
         </div>
      </div>
   );
}
