import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.componentes}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          character={character}
          onClose={character.onClose}
        />
      ))}
    </div>
  );
}
