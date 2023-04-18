import Card from "../Card/Card"

export default function Cards(props) {
   const { characters } = props;

   return (
      <div>
      {characters.map((character)=>(
         <Card character = {character} onClose ={props.onClose}/>
   ))}
      </div>
   )
}

