

export default function Cards(props) {
   const { character } = props;

   return (
      <div>
      {character.map((char)=>{
         return(
       <div className='App' style={{ padding: '25px' }}>
         {char.name} {char.gender} {char.species} {char.image}
      </div>
         )
   })}
      </div>
   )
}
