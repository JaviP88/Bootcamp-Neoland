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
    <h1 id='title'>Pokedex</h1>
    <section id='cardFinder'>
        <form>
        <input type='text' id='cardFinderInput' placeholder='Enter a pokemon name here'
        </form>
    </section>
    <section id='finderType'>
        <button id='allBtn'>
            <img src='./icons/pokeTypeLogo/allBtn.png' alt='all type button'/>
            <h4>All</h4>
        </button>
        <button id='grassBtn'>
            <img src='./icons/pokeTypeLogo/grassBtn.png' alt='Grass type button'/>
            <h4>Grass</h4>
        </button>
        <button id='fireBtn'>
            <img src='./icons/pokeTypeLogo/fireBtn.png' alt='fire type button'/>
            <h4>Fire</h4>
        </button>
        <button id='waterBtn'>
            <img src='./icons/pokeTypeLogo/waterBtn.png' alt='water type button'/>
            <h4>Water</h4>
        </button>
        <button id='bugBtn'>
            <img src='./icons/pokeTypeLogo/bugBtn.png' alt='bug type button'/>
            <h4>Bug</h4>
        </button>
        <button id='normalBtn'>
            <img src='./icons/pokeTypeLogo/normalBtn.png' alt='normal type button'/>
            <h4>Normal</h4>
        </button>
        <button id='poisonBtn'>
            <img src='./icons/pokeTypeLogo/poisonBtn.png' alt='poison type button'/>
            <h4>Poison</h4>
        </button>
        <button id='electricBtn'>
            <img src='./icons/pokeTypeLogo/electricBtn.png' alt='electric type button'/>
            <h4>Electric</h4>
        </button>
        <button id='groundBtn'>
            <img src='./icons/pokeTypeLogo/groundBtn.png' alt='ground type button'/>
            <h4>Ground</h4>
        </button>
        <button id='fairyBtn'>
            <img src='./icons/pokeTypeLogo/fairyBtn.png' alt='fairy type button'/>
            <h4>Fairy</h4>
        </button>
        <button id='fightingBtn'>
            <img src='./icons/pokeTypeLogo/fightingBtn.png' alt='fighting type button'/>
            <h4>Fighting</h4>
        </button>
        <button id='psychicBtn'>
            <img src='./icons/pokeTypeLogo/psychicBtn.png' alt='psychic type button'/>
            <h4>Psychic</h4>
        </button>
        <button id='rockBtn'>
            <img src='./icons/pokeTypeLogo/rockBtn.png' alt='rock type button'/>
            <h4>Rock</h4>
        </button>
        <button id='ghostBtn'>
            <img src='./icons/pokeTypeLogo/ghostBtn.png' alt='ghost type button'/>
            <h4>Ghost</h4>
        </button>
        <button id='iceBtn'>
            <img src='./icons/pokeTypeLogo/iceBtn.png' alt='ice type button'/>
            <h4>Ice</h4>
        </button>
        <button id='dragonBtn'>
            <img src='./icons/pokeTypeLogo/dragonBtn.png' alt='dragon type button'/>
            <h4>Dragon</h4>
        </button>
    </section>
    <section id='cardsContainer'></section>
    `

    pokeCards(pokemonList)
    filterList(pokemonList, '')

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
