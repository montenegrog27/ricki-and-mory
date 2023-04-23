import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from './Detail.module.css'


function Detail () {
    const [character,setCharacter] = useState ([])

    const{id} = useParams()// este numero viene en forma de string



    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);



    return(
        <>
        <div className={style.cardConteiner}>
            <div className={style.name}>
                <h3>Name</h3>
                {character.name}
            </div>
            <div className={style.status}>
                <h3>Status</h3>
                {character.status}
            </div>
            <div className={style.specie}>
                <h3>Specie</h3>
                {character.specie}
            </div>
            <div className={style.gender}>
                <h3>Gender</h3>
                {character.gender}
            </div>
            <div className={style.origin}>
                <h3>Origin</h3>
                {character.origin?.name}
            </div>
        </div>
        <div className={style.imageConteiner1}>
            <div className={style.imageconteiner2}>
                <img src={character.image} alt="" className={style.imagen} />
            </div>
        </div>
        </>
    )
}

export default Detail;