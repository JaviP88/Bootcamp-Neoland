import { pokemonList } from "../../data/pokeData";

export const filterList = (word) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardFinderInput = document.querySelector('#cardFinderInput')

    cardsContainer.innerHTML = '';

    const filteredPokeCards = pokemonList.filter((card) =>
     card.name.toUpperCase().includes(word.toUpperCase())
    );

    for (const card of filteredPokeCards) {

        cardsContainer.innerHTML += `
        <li id='${card.name}' class='pokeCards' 'type_${card.type}'>            
            <p>${card.id}</p>
            <div>
                <img src='${card.img1}' alt='${card.name}'
            </div> 
            <div>
                <h1>${card.name.toUpperCase()}</h1>
                <h2>${card.type}</h2>
            </div>
        </li>
        `
    }
    cardFinderInput.addEventListener('input', (ev) => filterList(ev.target.value))

}
/* export const filterList = (array, card, word) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardFinderInput = document.querySelector('#cardFinderInput')

    // cardsContainer.innerHTML = '';

    const filteredArray = array.filter(
        (item) => item.name.toUpperCase().includes(word.toUpperCase())
    );

    for (const item of filteredArray) {

        cardsContainer.innerHTML += `
        <li id='${item.name}' class='pokeCards' 'type_${item.type}'>            
            <p>${item.id}</p>
            <div>
                <img src='${item.img1}' alt='${item.name}'
            </div> 
            <div>
                <h1>${item.name.toUpperCase()}</h1>
                <h2>${item.type}</h2>
            </div>
        </li>
        `
    }
} */