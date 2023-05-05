const http = require("http");
const getCharById = require("./controllers/getCharById");
// const data = require("./utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    const { url } = req;

    console.log(`${url}`); // esto es para saber cuando esta levantado el server

    res.setHeader("Access-Control-Allow-Origin", "*");
    //!Homework de promesas:
    if (url.includes("/rickandmorty/character")) {
      const urlId = parseInt(url.split("/").pop());

      getCharById(res, urlId);
    }

    //!Homework de web server:
    // if (url.includes("/rickandmorty/character/")) {
    //   const urlId = parseInt(url.split("/").pop());

    //   let found = data.find((char) => char.id == urlId);
    //   if (found) {
    //     res.writeHead(200, { "Content-type": "application/json" });
    //     res.end(JSON.stringify(found));
    //   } else {
    //     res.writeHead(200, { "Content-type": "text/plain" });
    //     res.end("id noencontraedo");
    //   }
    // }
  })

  .listen(PORT, "localhost");

//!HW de Express
