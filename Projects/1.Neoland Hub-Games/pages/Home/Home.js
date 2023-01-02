import { initContent } from '../../main';
import './home.css';

export const createHome = () => {
    const main = document.querySelector('#main');
    main.innerHTML = `
        <h1>Neoland Hub Games</h1>
        <button id='pokeAPIBtn'>PokeAPI</button>
    `
    addListenerPokeAPI();
};

const addListenerPokeAPI = () => {
    const pokeAPIBtn = document.querySelector('#pokeAPIBtn');

    pokeAPIBtn.addEventListener('click', (event) => {
        console.log(event)
        initContent('pokeAPI')
    });
};