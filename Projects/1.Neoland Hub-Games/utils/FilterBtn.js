import { pokeCards } from "../components/pokeCards/PokeCards";

export const filterBtn = (list, type) => {
    const cardsContainer = document.querySelector('#cardsContainer');
    const cardsUl = document.createElement('ul');
    
    cardsContainer.innerHTML = ``;

    const filteredTypesCard = list.filter((card) =>
     card.type1.includes(type)
    );

    pokeCards(filteredTypesCard);
}