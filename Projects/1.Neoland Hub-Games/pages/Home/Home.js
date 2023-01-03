import { initContent } from '../../main';
import './home.css';

export const createHome = () => {
    const main = document.querySelector('#main');
    main.innerHTML = `
        <h1>Neoland Hub Games</h1>
        <button id='pokeAPIBtn'>
            <img src='' alt='Pokedex img'/>
            <h4>PokeAPI</h4>
        </button>
        <button id='ticTacToeBtn'>
            <img src='' alt='Tic tac toe img'/>
            <h4>Tic tac toe</h4>
        </button>
    `
    addListenerPokeAPI();
    // addListenerTicTacToe();
};

const addListenerPokeAPI = () => {
    const pokeAPIBtn = document.querySelector('#pokeAPIBtn');

    pokeAPIBtn.addEventListener('click', () => {
        initContent('pokeAPI')
    });
};

const addListenerTicTacToe = () => {
    const ticTacToeBtn = document.querySelector('#ticTacToeBtn');

    ticTacToeBtn.addEventListener('click', () => {
        initContent('ticTacToe');
    })
}