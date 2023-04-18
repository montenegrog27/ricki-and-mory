import './App.css';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
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
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Cards characters = {characters} onClose ={onClose}/>
      </div> 

      <hr />
       <div>
        <SearchBar onSearch = {searchHandler}/>
      </div> 
    </div> 
  )
  }

export default App