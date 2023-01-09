import './pokeCards.css';
import { pokemonFetch, pokemonList } from '../../data/pokeData';

pokemonFetch()

export const pokeCards = (list) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardsUl = document.createElement('ul');

    for (const pokemon of list) {
        if(pokemon.type2 == undefined){
            cardsUl.innerHTML += `
            <li id='${pokemon.name}' class='pokeCards type_${pokemon.type1}'>            
                <section class='header'>
                    <h1>${pokemon.name.toUpperCase()}</h1>
                    <p>${pokemon.id}</p>
                </section>
                <div class='pokeImg'>
                    <img src='${pokemon.img1}' alt='${pokemon.name}'/>
                </div> 
                <section class='type'>
                    <h2 class='type_${pokemon.type1}'>${pokemon.type1}</h2>
                </section>
                <h3>Characteristics</h3>
                <section class='characteristics'>
                    <ul>
                        <li>
                            <div>
                                <img src='./icons/altura.png' alt='height icon'/>
                                <h5>${pokemon.height / 10} m</h5>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src='./icons/peso.png' alt='height icon'/>
                                <h5>${pokemon.weight / 10} kg</h5>
                            </div>
                        </li>
                    </ul>
                </section>
                <section class='description'>
                    <p>${pokemon.description}</p>
                </section>
                <h3>Base Stats</h3>
                <section class='baseStats'>
                    <ul>
                        <li>
                            <div>
                                <h5>Hp: ${pokemon.hp}</h5>
                                <meter min='0' max='250' value='${pokemon.hp}'></meter>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>Attack: ${pokemon.attack}</h5>
                                <meter min='0' max='140' value='${pokemon.attack}'></meter>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>Defense: ${pokemon.defende}</h5>
                                <meter min='0' max='180' value='${pokemon.defende}'></meter>
                            </div>
                        </li>
                    </ul>
                </section>
            </li>
            ` 
        } else {
            cardsUl.innerHTML += `
        <li id='${pokemon.name}' class='pokeCards type_${pokemon.type1}'>            
            <section class='header'>
                <h1>${pokemon.name.toUpperCase()}</h1>
                <p>${pokemon.id}</p>
            </section>
            <div class='pokeImg'>
                <img src='${pokemon.img1}' alt='${pokemon.name}'/>
            </div> 
            <section class='type'>
                <h2 class='type_${pokemon.type1}'>${pokemon.type1}</h2>
                <h2 class='type_${pokemon.type2}'>${pokemon.type2}</h2>
            </section>
            <h3>Characteristics</h3>
            <section class='characteristics'>
                <ul>
                    <li>
                        <div>
                            <img src='./icons/altura.png' alt='height icon'/>
                            <h5>${pokemon.height / 10} m</h5>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='./icons/peso.png' alt='height icon'/>
                            <h5>${pokemon.weight / 10} kg</h5>
                        </div>
                    </li>
                </ul>
            </section>
            <section class='description'>
                <p>${pokemon.description}</p>
            </section>
            <h3>Base Stats</h3>
            <section class='baseStats'>
                    <ul>
                        <li>
                            <div>
                                <h5>Hp: ${pokemon.hp}</h5>
                                <meter min='0' max='250' value='${pokemon.hp}'></meter>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>Attack: ${pokemon.attack}</h5>
                                <meter min='0' max='140' value='${pokemon.attack}'></meter>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>Defense: ${pokemon.defende}</h5>
                                <meter min='0' max='180' value='${pokemon.defende}'></meter>
                            </div>
                        </li>
                    </ul>
                </section>
        </li>
        `
        }
    }
    cardsContainer.appendChild(cardsUl);
}