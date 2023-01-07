import './pokeCards.css';
import { pokemonFetch, pokemonList } from '../../data/pokeData';

pokemonFetch()

export const pokeCards = (list) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardsUl = document.createElement('ul');

    for (const pokemon of list) {
        if(pokemon.type2 == undefined){
            cardsUl.innerHTML += `
            <li id='${pokemon.name}' class='pokeCards' 'type_${pokemon.type}'>            
                <section>
                    <h1>${pokemon.name.toUpperCase()}</h1>
                    <p>${pokemon.id}</p>
                </section>
                <div>
                    <img src='${pokemon.img1}' alt='${pokemon.name}'
                </div> 
                <section>
                    <h2>${pokemon.type1}</h2>
                </section>
                <h3>Characteristics</h3>
                <section>
                    <div>
                        <h5>${pokemon.height / 10} m</h5>
                    </div>
                    <div>
                        <h5>${pokemon.weight / 10} kg</h5>
                    </div>
                </section>
                <section>
                    <p>${pokemon.description}</p>
                </section>
                <h3>Base Stats</h3>
                <section>
                    <div>
                        <h5>${pokemon.hp}</h5>
                        <h5>${pokemon.attack}</h5>
                        <h5>${pokemon.defende}</h5>
                    </div>
                </section>
            </li>
            ` 
        } else {
            cardsUl.innerHTML += `
        <li id='${pokemon.name}' class='pokeCards' 'type_${pokemon.type}'>            
            <section>
                <h1>${pokemon.name.toUpperCase()}</h1>
                <p>${pokemon.id}</p>
            </section>
            <div>
                <img src='${pokemon.img1}' alt='${pokemon.name}'
            </div> 
            <section>
                <h2>${pokemon.type1}</h2>
                <h2>${pokemon.type2}</h2>
            </section>
            <h3>Characteristics</h3>
            <section>
                <div>
                    <h5>${pokemon.height / 10} m</h5>
                </div>
                <div>
                    <h5>${pokemon.weight / 10} kg</h5>
                </div>
            </section>
            <section>
                <p>${pokemon.description}</p>
            </section>
            <h3>Base Stats</h3>
            <section>
                <div>
                    <h5>${pokemon.hp}</h5>
                    <h5>${pokemon.attack}</h5>
                    <h5>${pokemon.defende}</h5>
                </div>
            </section>
        </li>
        `
        }
    }
    cardsContainer.appendChild(cardsUl);
}