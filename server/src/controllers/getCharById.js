// const axios = require("axios");

// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } =
//         response.data;
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({ id, name, gender, species, origin, image, status })
//       );
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;
//! SE ELIMINA TODO PARA HW DE EXPRESS:
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;
  axios
    .get(`${URL}${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = { id, name, gender, species, origin, image, status };
      if (character.name) {
        res.status(200).json(character);
      } else res.status(404).send("Not Found");
      res.json(character);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
}

module.exports = getCharById;
