export default function Card(props) {
   const {character} = props

   return (
      <div>
         { <button onClick ={""}  >X</button> }
         <h2>Name: {character.name}</h2>
         <h2>Species:{character.species}</h2>
         <h2>Gender:{character.gender}</h2>
         { <img  src={character.image} alt={""} /> }  
      </div>
   );
}
