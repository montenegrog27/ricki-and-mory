let myFavorites = [];

function postFav(req, res) {
  //?guardo lo que viene por body en una variable:
  const character = req.body;

  //?pusheo a mi arreglo myFavorites:
  myFavorites.push(character);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  //? guardo lo que viene por params en una variable
  const { id } = req.params;

  //? Filtro el arreglo myFavorites, "quiero quedarme con todos los que no coincidan con el id" osea eliminar el personaje del arreglo
  const filtered = myFavorites.filter((char) => char.id !== Number(id));

  //? Para sustituir el arreglo hacemos:
  myFavorites = filtered;
  res.status(200).json(myFavorites);
}


module.exports = { postFav, deleteFav };
