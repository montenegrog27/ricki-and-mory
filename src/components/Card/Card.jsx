import { Rick } from "../../data";

export default function Card(props) {
   return (
      <div>
         { <button  >X</button> }
         <h2>Name: {Rick.name}</h2>
         <h2>Species:{Rick.species}</h2>
         <h2>Gender:{Rick.gender}</h2>
         { <img  src={Rick.image} alt="" /> }  
      </div>
   );
}
