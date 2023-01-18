import './Card.css'
export const Card = (props) => {
    const {character} = props;

    return (
        <div>
          <h2>id: {character.id}</h2>
          <h1>Name: {character.name}</h1>
          <img src={character.image} alt={character.name}/>
          <h2>Status: {character.status}</h2>
          <h2>Origin: {character.origin.name}</h2>
        </div>
    );
};

export default Card;