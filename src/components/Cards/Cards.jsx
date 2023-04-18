import style from "./Cards.module.css"
import Card from "../Card/Card"

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className= {style.componentes} >
      {characters.map((character)=>(
         <Card character = {character} onClose ={props.onClose}/>
   ))}
      </div>
   )
}

