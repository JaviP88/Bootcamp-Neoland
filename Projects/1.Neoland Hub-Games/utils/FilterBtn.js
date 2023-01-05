import { pokemonList } from "../data/pokeData";

export const filterBtn = (list, type) => {
    const cardsContainer = document.querySelector('#cardsContainer');
    const btn = document.querySelector(`#${type}Btn`);
    cardsContainer.innerHTML = ``;

    const filteredTypesCard = list.filter((card) =>
     card.type.includes(type)
    );

    for (const card of filteredTypesCard) {
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


    
    // btn.addEventListener('click', () => filterBtn(pokemonList, 'fire'))
    // btn.addEventListener('click', () => filterBtn())
}