import './pokeMenu.css';
import { cleanMain } from '../../../utils/CleanMain';
import { createPokeGallery } from '../PokeGallery/PokeGallery' 




export const createPokeMenu = () => {
    const main = document.querySelector('#main');
    cleanMain();

    main.innerHTML = `
    <div class='container'>
        <h1>PokeAPI</h1>
            <section>
                <button id='pokedexBtn'>
                <img src='./images/pokedex.png' alt='Pokedex img'/> 
                <h4>Pokedex</h4>
                </button>
                <button id='pokeShop'>
                <img src='./images/pokeshop.png' alt='Pokeshop img'/> 
                <h4>Poke Shop</h4>
            </section>
        </button>
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