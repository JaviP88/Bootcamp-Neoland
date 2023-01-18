import './CharacterList.css';
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css';
import Card from './Card';


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
    <section>
      {characterList.map((character) => (
        <Card  key={character.id} character={character} /> //No entiendo esto
      ))}
    </section>
  )
}
