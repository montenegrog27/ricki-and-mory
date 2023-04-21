import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import Portada from './components/Portada/Portada';
import { useState } from 'react';


function App () {
    const [characters, setCharacters] = useState ([])

    function searchHandler(id) {
    let found1 = characters.find((c)=>c.id===Number(id))
    if (!found1){
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [data,...oldChars]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   }else {window.alert('El personaje ya fue agregado')
   }
  }
    function onClose(id) {
      let found = characters.find((characters)=>characters.id===id)
      let deleted = characters.filter(characters=>characters.id !== found.id);
      setCharacters(deleted)
    }


  return (
    <>
      <div className='App'>
        <Portada/>
        <NavBar onSearch = {searchHandler}/>
        <Cards characters = {characters} onClose ={onClose}/>
      </div> 
    </>
  )
  }

export default App