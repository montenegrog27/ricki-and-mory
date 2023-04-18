import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import characters from './data';


function App () {
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
        onClose={() => window.alert('Emulamos que se cierra la card')}/>
      </div>
      <hr />

      <div>
        <Cards character = {characters}/>
      </div> 

      <hr />
       {/* <div>
        <SearchBar/>
      </div>  */}
    </div> 
  )
  }

export default App