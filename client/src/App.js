import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail";
import Home from "./views/Home";
import About from "./views/About";
import Favorites from "./views/Favorites";
import { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./views/Landing";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  //! Vamos a comentar esta funcion searchHandler para hacer la hw de async await
  // function searchHandler(id) {
  //   let found1 = characters.find((c) => c.id === Number(id));
  //   if (!found1) {
  //     fetch(`http://localhost:3001/rickandmorty/character/${id}`) // mi servidor
  //       // fetch(`https://rickandmortyapi.com/api/character/${id}`) // la api de R&M
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.name) {
  //           setCharacters((oldChars) => [data, ...oldChars]);
  //         } else {
  //           window.alert("No hay personajes con ese ID");
  //         }
  //       });
  //   } else {
  //     window.alert("El personaje ya fue agregado");
  //   }
  // }

  async function searchHandler(id) {
    // id.preventDefault();
    try {
      let found1 = characters.find((c) => c.id === Number(id));
      if (!found1) {
        const response = (
          await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
        ).data;

        if (response.name) {
          setCharacters((oldChars) => [response, ...oldChars]);
        }
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function onClose(id) {
    let found = characters.find((characters) => characters.id === id);
    let deleted = characters.filter((characters) => characters.id !== found.id);
    setCharacters(deleted);
  }

  //!Aca deberia estar una funcion "login" que la vamos a eliminar para la hw de express
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const username = "german@gmail.com";
  // const password1 = "123456";

  //?hw de express(nuevo logini) copisteamos la funcinon q nos mandan en la hw
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      console.log(data);
      setAccess(data);
      access && navigate("/home");
    });
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Landing login={login} />} />
          <Route
            path="/home"
            element={
              <Home
                characters={characters}
                onClose={onClose}
                onSearch={searchHandler}
              />
            }
          />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

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
