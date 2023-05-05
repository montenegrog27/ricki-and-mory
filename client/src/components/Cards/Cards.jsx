import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.componentes}>
      {characters.map((character) => (
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
