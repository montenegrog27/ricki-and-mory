import style from "./Cards.module.css";
import Card from "../Card/Card";

function Cards(props) {
  return (
    <div className={style.componentes}>
      {props.characters.map((character) => (
        <Card
          key={props.id}
          id={props.id} //agregado con pol
          character={character}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}

export default Cards;
