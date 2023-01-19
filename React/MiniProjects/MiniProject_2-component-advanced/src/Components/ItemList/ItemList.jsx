import './ItemList.css'
export const ItemList = ({character}) => {

    return (
        <li>
          <h2>id: {character.id}</h2>
          <h1>Name: {character.name}</h1>
          <img src={character.image} alt={character.name}/>
          <h2>Status: {character.status}</h2>
          <h2>Origin: {character.origin.name}</h2>
        </li>
    );
};

export default ItemList;