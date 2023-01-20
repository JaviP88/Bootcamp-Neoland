import "./ItemList.css";
import H1 from "../../Utils/H1/H1";
import H2 from "../../Utils/H2/H2";
import Image from "../../Utils/Image/Image";


export const ItemList = ({ character }) => {
  return (
    <li>
      <H2 keyText={'id'} text={character.id} />
            <h2>id: {character.id}</h2>
      <H1 keyText={'Name'} text={character.name} />
            <h1>Name: {character.name}</h1>
      <Image src={character.image} alt={character.name} />
      <h2>Status: {character.status}</h2>
      <h2>Origin: {character.origin.name}</h2>
    </li>
  );
};

export default ItemList;
