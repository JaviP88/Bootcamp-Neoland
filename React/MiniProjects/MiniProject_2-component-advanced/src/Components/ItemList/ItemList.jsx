import "./ItemList.css";
import H1 from '../UI/H1/H1'
import H2 from "../UI/H2/H2";
import Image from "../UI/Image/Image";


export const ItemList = ({ character }) => {
  return (
    <li>
      <H2 keyText={'id'} text={character.id} />
      <H1 keyText={'Name'} text={character.name} />
      <Image src={character.image} alt={character.name} />
      <H2 keyText={'Status'} text={character.status} />
      <H2 keyText={'Origin'} text={character.origin.name} />
    </li>
  );
};

export default ItemList;
