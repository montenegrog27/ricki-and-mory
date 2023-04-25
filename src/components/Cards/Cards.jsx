import style from "./Cards.module.css"
import Card from "../Card/Card"

export default function Cards(props) {

   return (
      <div className= {style.componentes} >
      {props.characters.map((character)=>(
         <Card 
         key={props.id}
         character = {character} 
         onClose ={props.onClose}/>
   ))}
      </div>
   )
}

