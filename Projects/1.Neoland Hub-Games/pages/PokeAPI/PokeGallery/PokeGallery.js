import './pokeGallery.css';
import { pokeCards } from '../../../components/pokeCards/PokeCards';
import { cleanMain } from '../../../utils/CleanMain';
import { filterList } from '../../../components/FinderToolBar/FinderToolBar';
import { pokemonList } from '../../../data/pokeData';
import { filterBtn } from '../../../utils/FilterBtn';

export const createPokeGallery = () => {
    const main = document.querySelector('#main')
    
    cleanMain();

    main.innerHTML = `
    <h1>Pokedex</h1>
    <section id='cardFinder'>
        <form>
        <input type='text' id='cardFinderInput' placeholder='Enter a pokemon name here'
        </form>
    </section>
    <section id='finderType'>
        <button id='allBtn'>All</button>
        <button id='grassBtn'>Grass</button>
        <button id='fireBtn'>Fire</button>
        <button id='waterBtn'>Water</button>
        <button id='bugBtn'>Bug</button>
        <button id='normalBtn'>Normal</button>
        <button id='poisonBtn'>Poison</button>
        <button id='electricBtn'>Electric</button>
        <button id='groundBtn'>Ground</button>
        <button id='fairyBtn'>Fairy</button>
        <button id='fightingBtn'>Fighting</button>
        <button id='psychicBtn'>Psychic</button>
        <button id='rockBtn'>Rock</button>
        <button id='ghostBtn'>Ghost</button>
        <button id='iceBtn'>Ice</button>
        <button id='dragonBtn'>Dragon</button>
    </section>
    <section id='cardsContainer'></section>
    `

    filterList('')

    addListenerTypesBtn()
   
}

const addListenerTypesBtn = () => {
    const allBtn = document.querySelector(`#allBtn`);
    const grassBtn = document.querySelector(`#grassBtn`);
    const fireBtn = document.querySelector(`#fireBtn`);
    const waterBtn = document.querySelector(`#waterBtn`);
    const bugBtn = document.querySelector(`#bugBtn`);
    const normalBtn = document.querySelector(`#normalBtn`);
    const poisonBtn = document.querySelector(`#poisonBtn`);
    const electricBtn = document.querySelector(`#electricBtn`);
    const groundBtn = document.querySelector(`#groundBtn`);
    const fairyBtn = document.querySelector(`#fairyBtn`);
    const fightingBtn = document.querySelector(`#fightingBtn`);
    const psychicBtn = document.querySelector(`#psychicBtn`);
    const rockBtn = document.querySelector(`#rockBtn`);
    const ghostBtn = document.querySelector(`#ghostBtn`);
    const iceBtn = document.querySelector(`#iceBtn`);
    const dragonBtn = document.querySelector(`#dragonBtn`);


    allBtn.addEventListener('click', () => filterBtn(pokemonList, ''))
    grassBtn.addEventListener('click', () => filterBtn(pokemonList, 'grass'))
    fireBtn.addEventListener('click', () => filterBtn(pokemonList, 'fire'))
    waterBtn.addEventListener('click', () => filterBtn(pokemonList, 'water'))
    bugBtn.addEventListener('click', () => filterBtn(pokemonList, 'bug'))
    normalBtn.addEventListener('click', () => filterBtn(pokemonList, 'normal'))
    poisonBtn.addEventListener('click', () => filterBtn(pokemonList, 'poison'))
    electricBtn.addEventListener('click', () => filterBtn(pokemonList, 'electric'))
    groundBtn.addEventListener('click', () => filterBtn(pokemonList, 'ground'))
    fairyBtn.addEventListener('click', () => filterBtn(pokemonList, 'fairy'))
    fightingBtn.addEventListener('click', () => filterBtn(pokemonList, 'fighting'))
    psychicBtn.addEventListener('click', () => filterBtn(pokemonList, 'psychic'))
    rockBtn.addEventListener('click', () => filterBtn(pokemonList, 'rock'))
    ghostBtn.addEventListener('click', () => filterBtn(pokemonList, 'ghost'))
    iceBtn.addEventListener('click', () => filterBtn(pokemonList, 'ice'))
    dragonBtn.addEventListener('click', () => filterBtn(pokemonList, 'dragon'))

}
