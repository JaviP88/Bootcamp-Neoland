import './pokeGallery.css';
import { pokemonFetch } from '../../../data/pokeData';
import { pokeCards } from '../../../components/pokeCards/PokeCards';

export const createPokeGallery = () => {
    const main = document.querySelector('#main')
    main.innerHTML = ``;
    // pokemonFetch()
    pokeCards()
}