import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import { useState } from 'react';


function App () {
    const [characters, setCharacters] = useState ([])


    function onClose(index) {
      
    }

    function searchHandler(character) {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         });
   }


  return (
    <>
      <div className='App'>
        <NavBar onSearch = {searchHandler}/>
        <Cards characters = {characters} onClose ={onClose}/>
      </div> 
    </>
  )
  }

export default App