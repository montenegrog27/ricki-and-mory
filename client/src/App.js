import "./App.css";
import Detail from "./views/Detail";
import Home from "./views/Home";
import About from "./views/About";
import Favorites from "./views/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Landing from "./views/Landing";
import axios from "axios";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchString, setSearchString] = useState("");
  const location = useLocation();

  async function searchHandler(id) {
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
    let found = characters.find((char) => char.id === id);
    let deleted = characters.filter((char) => char.id !== found.id);
    setCharacters(deleted);
  }

  //!Aca deberia estar una funcion "login" que la vamos a eliminar para la hw de express
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

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
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {/* <h1>Bienvenido! {user.username}</h1>
          <button onClick={signOut}>Sign out</button> */}

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
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
