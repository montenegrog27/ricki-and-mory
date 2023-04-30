const axios = require("axios");

function getCharById(res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { name, gender, species, origin, image, status } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ name, gender, species, origin, image, status }));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports = getCharById;
