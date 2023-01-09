import { pokeCards } from "../pokeCards/PokeCards";

export const filterList = (list, word) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardFinderInput = document.querySelector('#cardFinderInput')


    cardsContainer.innerHTML = '';

    const filteredPokeCards = list.filter((card) =>
     card.name.toUpperCase().includes(word.toUpperCase())
    );

    pokeCards(filteredPokeCards);
    
    cardFinderInput.addEventListener('input', (ev) => filterList(list, ev.target.value))

};