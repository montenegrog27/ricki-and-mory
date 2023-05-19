import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.componentes}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          character={character}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
