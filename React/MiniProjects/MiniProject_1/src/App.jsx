import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`)
      let dataJSON = await data.json()

      let characterNoDead = [];
      for (const data of dataJSON.results) {
        if (data.status !== 'Dead') {
          characterNoDead.push(data)
        }
      }
      setCharacterList(characterNoDead);
    })();
  }, []);

  return (
    <section>
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>id: {character.id}</h2>
          <h1>Name: {character.name}</h1>
          <img src={character.image} alt={character.name}/>
          <h2>Status: {character.status}</h2>
          <h2>Origin: {character.origin.name}</h2>
        </div>
      ))}
    </section>
  )
}

export default App
