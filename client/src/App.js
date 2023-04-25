import './App.css';
import NavBar from './components/NavBar/NavBar';
import Detail from './views/Detail';
import Home from './views/Home';
import About from './views/About';
import { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Landing from './views/Landing';

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
        <Routes>
          <Route path='/about' element = {<About/>}/>
          <Route exact path='/' element = {<Landing/>}/>
          <Route path='/home' element={<Home characters = {characters} onClose = {onClose} onSearch = {searchHandler}/>} />
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/about' element = {<About/>}/>

        </Routes>
      </div> 

    </>
  )
  }

export default App


// return (
//   <>
//     <div className='App'>
//       <NavBar onSearch = {searchHandler}/>
//       <Routes>
//         <Route path='/about' element = {<About/>}/>
//         <Route exact path='/' element = {<Landing/>}/>
//         <Route path='/home' element={<Home characters = {characters} onClose = {onClose}/>} />
//         <Route path='/detail/:id' element={<Detail/>}/>
//         <Route path='/about' element = {<About/>}/>

//       </Routes>
//     </div> 

//   </>
// )
// }