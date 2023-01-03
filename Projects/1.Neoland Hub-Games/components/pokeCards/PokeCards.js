import './pokeCards.css';
import { pokemonFetch, pokemonList } from '../../data/pokeData';

pokemonFetch()

export const pokeCards = () => {
    // const main = document.querySelector('#main');
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardsUl = document.createElement('ul');

    for (const pokemon of pokemonList) {
        cardsUl.innerHTML += `
        <li id='${pokemon.name}' class='pokeCards' 'type_${pokemon.type}'>            
            <p>${pokemon.id}</p>
            <div>
                <img src='${pokemon.img1}' alt='${pokemon.name}'
            </div> 
            <div>
                <h1>${pokemon.name.toUpperCase()}</h1>
                <h2>${pokemon.type}</h2>
            </div>
        </li>
        `
    }
    cardsContainer.appendChild(cardsUl);
}