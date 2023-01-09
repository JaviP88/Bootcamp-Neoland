import './itemGallery.css';
import { itemsPokeCards } from '../../../components/itemsPokeCards/ItemsPokeCards'
import { cleanMain } from '../../../utils/CleanMain';
import { filterList } from '../../../components/FinderToolBar/FinderToolBar';
import { itemsPokeList } from '../../../data/itemsPokeData';
import { filterBtn } from '../../../utils/FilterBtn';

export const createItemGallery = () => {
    const main = document.querySelector('#main')
    
    cleanMain();

    main.innerHTML = `
    <h1 id='title'>Poke Shop</h1>
    <section id='cardFinder'>
        <form>
        <input type='text' id='cardFinderInput' placeholder='Enter a pokemon name here'
        </form>
    </section>
    <section id='cardsContainer'></section>
    `

    itemsPokeCards(itemsPokeList)
    filterList(itemsPokeData, '')

    // addListenerTypesBtn()
   
}

// const addListenerTypesBtn = () => {
//     const allBtn = document.querySelector(`#allBtn`);
//     const grassBtn = document.querySelector(`#grassBtn`);
//     const fireBtn = document.querySelector(`#fireBtn`);
//     const waterBtn = document.querySelector(`#waterBtn`);
//     const bugBtn = document.querySelector(`#bugBtn`);
//     const normalBtn = document.querySelector(`#normalBtn`);
//     const poisonBtn = document.querySelector(`#poisonBtn`);
//     const electricBtn = document.querySelector(`#electricBtn`);
//     const groundBtn = document.querySelector(`#groundBtn`);
//     const fairyBtn = document.querySelector(`#fairyBtn`);
//     const fightingBtn = document.querySelector(`#fightingBtn`);
//     const psychicBtn = document.querySelector(`#psychicBtn`);
//     const rockBtn = document.querySelector(`#rockBtn`);
//     const ghostBtn = document.querySelector(`#ghostBtn`);
//     const iceBtn = document.querySelector(`#iceBtn`);
//     const dragonBtn = document.querySelector(`#dragonBtn`);


//     allBtn.addEventListener('click', () => filterBtn(itemsPokeData, ''))
//     grassBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'grass'))
//     fireBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'fire'))
//     waterBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'water'))
//     bugBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'bug'))
//     normalBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'normal'))
//     poisonBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'poison'))
//     electricBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'electric'))
//     groundBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'ground'))
//     fairyBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'fairy'))
//     fightingBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'fighting'))
//     psychicBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'psychic'))
//     rockBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'rock'))
//     ghostBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'ghost'))
//     iceBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'ice'))
//     dragonBtn.addEventListener('click', () => filterBtn(itemsPokeData, 'dragon'))

// }
