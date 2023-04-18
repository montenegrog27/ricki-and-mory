import style from "./Card.module.css"
export default function Card(props) {
   const {character, onClose} = props

   return (
      <div className={style.componente}>
         <div className={style.imagen}>
            { <img src={character.image} alt={""} /> }  
            <h2 className={style.name}>Name: {character.name}</h2>
            { <button className={style.button} onClick ={onClose}  >X</button> }
         </div>
         <div className={style.atributes}>
            <h2>Species:{character.species}</h2>
            <h2>Gender:{character.gender}</h2>
         </div>
      </div>
   );
}
