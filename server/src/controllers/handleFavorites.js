//! //!Comentado todo para la ultima hw de sequelize que pide que lo elimine

// let myFavorites = [];

// function postFav(req, res) {
//   //?guardo lo que viene por body en una variable:
//   const character = req.body;

//   //?pusheo a mi arreglo myFavorites:
//   myFavorites.push(character);
//   res.status(200).json(myFavorites);
// }

// function deleteFav(req, res) {
//   //? guardo lo que viene por params en una variable
//   const { id } = req.params;

//   //? Filtro el arreglo myFavorites, "quiero quedarme con todos los que no coincidan con el id" osea eliminar el personaje del arreglo
//   const filtered = myFavorites.filter((char) => char.id !== Number(id));

//   //? Para sustituir el arreglo hacemos:
//   myFavorites = filtered;
//   res.status(200).json(myFavorites);
// }

// module.exports = { postFav, deleteFav };

//! hw de sequelize 2
const { Favorite } = require("../DB_connections");

async function postFav(req, res) {
  const { name, origin, status, image, species, gender } = req.body;

  try {
    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).send("Faltan datos");
    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteFav(req, res) {
  const { id } = req.params;

  try {
    await Favorite.destroy({ where: { id: id } });

    const favs = await Favorite.findAll();

    return res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { postFav, deleteFav };
