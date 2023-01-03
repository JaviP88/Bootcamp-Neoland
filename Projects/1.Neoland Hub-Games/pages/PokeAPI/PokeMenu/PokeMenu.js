import './pokeMenu.css';
import { cleanMain } from '../../../utils/CleanMain';
import { createPokeGallery } from '../PokeGallery/PokeGallery' 




export const createPokeMenu = () => {
    const main = document.querySelector('#main');
    cleanMain();

    main.innerHTML = `
    <div class='container'>
        <h1>PokeAPI</h1>
        <button id='pokedexBtn'>Pokedex</button>
        <button id='pokeShop'>Poke Shop</button>
    </div>
    `
    addListenerPokedex()
    // addListenerPokeShop()
};

const addListenerPokedex = () => {
    const pokedexBtn = document.querySelector('#pokedexBtn');
    pokedexBtn.addEventListener('click', () => {
        createPokeGallery()
    })
}