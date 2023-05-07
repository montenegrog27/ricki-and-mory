const axios = require("axios");
const user = require("../utils/users");

function login(req, res) {
  //?destructuring de lo que recibo por query:
  const { email, password } = req.query;

  //?const found p encontrar coincidencia de lo que me pasan por query y el user traido de user
  const found = user.find(
    (user) => user.email === email && user.password === password
  );

  //?si existe found, devolver un json acces true, sino un false
  if (found) {
    res.status(200).json({ access: true });
  } else res.status(200).json({ access: false });
}
module.exports = login;
