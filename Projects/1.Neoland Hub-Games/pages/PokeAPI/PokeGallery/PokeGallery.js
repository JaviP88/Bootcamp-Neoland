import './pokeGallery.css';
import { pokeCards } from '../../../components/pokeCards/PokeCards';
import { cleanMain } from '../../../utils/CleanMain';
import { filterList } from '../../../components/FinderToolBar/FinderToolBar';
import { pokemonList } from '../../../data/pokeData';

export const createPokeGallery = () => {
    const main = document.querySelector('#main')
    const cardFinderInput = document.querySelector('#cardFinderInput')
    cleanMain();

    main.innerHTML = `
    <section id='cardFinder'>
        <form>
        <input type='text' id='cardFinderInput' placeholder='Enter a pokemon name here'
        </form>
    </section>
    <section id='finderType'>
        <button>1</button>
        <button>15</button>
    </section>
    <section id='cardsContainer'></section>
    `

    filterList('')
    // cardFinderInput.addEventListener('input', (ev) => filteredPokeCards(ev.Input.value))
    // filterList(pokemonList, pokeCards(), '')
    // pokeCards();
}