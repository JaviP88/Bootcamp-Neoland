import './CharacterList.css';
import { useState } from 'react'
import { useEffect } from 'react'
import '../../App.css';
import ItemList from '../ItemList/ItemList';

export const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`)
      let dataJSON = await data.json()

// Si queremos quitar los personajes 'Dead' del array de cartas, usamos esto:

      /*let charactersNoDead = [];
      for (const data of dataJSON.results) {
        if (data.status !== 'Dead') {
          charactersNoDead.push(data)
        }
      }*/

// Y sustituiriamos dataJSON.results por caraterNoDead
      setCharacterList(dataJSON.results);
    })();
  }, []);

  return (
    <ul>
      {characterList.map((character) => (
        <ItemList  key={character.id} character={character} /> //No entiendo esto
      ))}
    </ul>
  )
}
