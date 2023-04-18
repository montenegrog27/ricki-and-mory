export default function Card(props) {
   const {character, onClose} = props

   return (
      <div>
         { <button onClick ={onClose}  >X</button> }
         { <img  src={character.image} alt={""} /> }  
         <h2>Name: {character.name}</h2>
         <h2>Species:{character.species}</h2>
         <h2>Gender:{character.gender}</h2>

      </div>
   );
}
