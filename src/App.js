import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import characters from './data';


function App () {
    function onClose () {
      window.alert ("Emulamos que se cierra la card")
    }

    function searchHandler (){
      window.alert ("El personaje que quiero buscar")
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