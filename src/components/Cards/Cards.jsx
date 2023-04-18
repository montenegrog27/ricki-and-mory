
export default function Cards(props) {
   // const { character } = props; // para no poner props.character.map

   return (
      <div className="App">
      {props.character.map((char)=>{
         return(
       <div className='App' style={{ padding: '25px' }}>
         {char.name} {char.gender} {char.species} {<img src={char.image}/>}
      </div>
         )
   })}
      </div>
   )
}
