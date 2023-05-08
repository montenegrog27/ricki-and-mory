// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// // const data = require("./utils/data");
// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     const { url } = req;

//     console.log(`${url}`); // esto es para saber cuando esta levantado el server

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     //!Homework de promesas:
//     if (url.includes("/rickandmorty/character")) {
//       const urlId = parseInt(url.split("/").pop());

//       getCharById(res, urlId);
//     }

//     //!Homework de web server:
//     // if (url.includes("/rickandmorty/character/")) {
//     //   const urlId = parseInt(url.split("/").pop());

//     //   let found = data.find((char) => char.id == urlId);
//     //   if (found) {
//     //     res.writeHead(200, { "Content-type": "application/json" });
//     //     res.end(JSON.stringify(found));
//     //   } else {
//     //     res.writeHead(200, { "Content-type": "text/plain" });
//     //     res.end("id noencontraedo");
//     //   }
//     // }
//   })

//   .listen(PORT, "localhost");

//!HW de Express(dice eliminar todo y empezar de cero a hacer un servidor)
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("../src/routes/index");

//?configurar middleware express.json para traducir del formato json a obj:
server.use(express.json());


//?traido de la hw
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


//? Crear ruta hacia router, para que router ejecute las otras rutas:
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
