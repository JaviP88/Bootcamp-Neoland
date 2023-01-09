import './itemsPokeCards.css';
import { itemFetch, itemsPokeList  } from '../../data/itemsPokeData';

itemFetch()

export const itemsPokeCards = (list) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardsUl = document.createElement('ul');

    for (const item of list) {
            cardsUl.innerHTML += `
            <li id='${item.name}' class='itemsCards type_${item.type}'>            
                <section class='header'>
                    <h2 class='type_${item.type}'>${item.type}</h2>
                    <p>${item.id}</p>
                </section>
                    <div class='itemImg'>
                        <img src='${item.img}' alt='${item.name}'/>
                    </div> 
                <section class='type'>
                <div>  
                <h1>${item.name.toUpperCase()}</h1>
                <h1>${item.price}</h1>
                </div>  
                    <div>  
                        <p>${item.description}</p>
                    </div>  
                </section>
            ` 
        }

    cardsContainer.appendChild(cardsUl);
}