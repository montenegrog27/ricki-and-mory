import style from "./Cards.module.css";
import Card from "../Card/Card";

// componentDidMount = () => {
//   this.props.addFavorites, this.props.deleteFavorites;
// }; SOLO EN COMPONENTES DE CLASE

export default function Cards(props) {
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
