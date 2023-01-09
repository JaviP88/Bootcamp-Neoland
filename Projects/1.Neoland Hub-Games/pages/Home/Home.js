import { initContent } from '../../main';
import './home.css';

export const createHome = () => {
    const main = document.querySelector('#main');
    main.innerHTML = `
        <h1>Neoland Hub Games</h1>
        <section class='buttons'>
            <button id='pokeAPIBtn'>
                <img src='./images/pokeapi.png' alt='PokeAPI img'/>
                <h4>PokeAPI</h4>
            </button>
            <button id='ticTacToeBtn'>
                <img src='./images/tictactoe.png' alt='Tic tac toe img'/>
                <h4>Tic tac toe</h4>
            </button>
        </section>
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