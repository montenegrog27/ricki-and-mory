// const http = require("http")
// const data = require('./utils/data')
// const PORT =3001
// //Tengo que buscar el id y levantarlo al servidor, haciendo un include si url tiene el character que lo levante al servdir
// http.createServer((req,res)=>{
//     const {url} = req;
//     console.log(`${url}`) // esto es para saber cuando esta levantado el server
//     res.setHeader('Access-Control-Allow-Origin', '*');
    

//     if (url.includes("/rickandmorty/character/")) {
        
//         const urlId = parseInt(url.split("/").pop());
//         // console.log(urlId)

//         let found = data.find((char)=>char.id==urlId);
//         // console.log(found);
//         // return;
//         if(found){

//             res.writeHead(200,{"Content-type":"application/json"})
//             res.end(JSON.stringify(found))
//         }else {
//             res.writeHead(200,{"Content-type":"text/plain"})
//             res.end("id noencontraedo")
//         }
//         return;
// }
// res.writeHead(200,{"Content-type":"text/plain"})
// res.end("pagina no encontraedo")
// }
// )
// .listen(PORT,"localhost");

var data = require("./utils/data.js");
var http = require("http");
const PORT = 3001;

http.createServer((req, res) => {
    const {url} = req;
    console.log("Peticion :"+url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url.indexOf("/rickandmorty/character/") >= 0) {
       let cad = url.split("/");
       let id = parseInt(cad[3]);
       let hallado = data.find((ele) => ele.id == id);
       if(hallado) {
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(JSON.stringify(hallado));
       } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end('Id no encontrado');
       }
       return;
    }
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end('Pagina no encontrada');
})
.listen(PORT, 'localhost');