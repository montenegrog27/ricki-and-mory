import Card from "../Card/Card"

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className="App">
      {characters.map((character)=>{
         <Card character = {character}/>
   })}
      </div>
   )
}

// return(
//    <div className='App' style={{ padding: '25px' }}>
//      {char.name} {char.gender} {char.species} {<img src={char.image}/>}
//   </div>
//      )