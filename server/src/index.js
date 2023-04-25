const http = require("http")
const characters = require('./utils/data')
const PORT =3001
//Tengo que buscar el id y levantarlo al servidor, haciendo un include si url tiene el character que lo levante al servdir
http.createServer((req,res)=>{
    console.log(`Server raised on port ${PORT}`) // esto es para saber cuando esta levantado el server
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if (url.includes("/rickandmorty/character/")) {
        const urlId = parseInt(url.split("/").pop())

        let found = characters.find((character)=>character.id===urlId)
        console.log(found)

        if(found){
            res.writeHead(200,{"Content-type":"application/json"})
            res.end(JSON.stringify(found))
        }

    }
}).listen(PORT,"localhost")