
export const filterList = (list, word) => {
    const cardsContainer = document.querySelector('#cardsContainer')
    const cardFinderInput = document.querySelector('#cardFinderInput')
    const cardsUl = document.createElement('ul');


    cardsContainer.innerHTML = '';

    const filteredPokeCards = list.filter((card) =>
     card.name.toUpperCase().includes(word.toUpperCase())
    );

    for (const card of filteredPokeCards) {
        if(card.type2 == undefined){
            cardsUl.innerHTML += `
            <li id='${card.name}' class='pokeCards' 'type_${card.type}'>            
                <section>
                    <h1>${card.name.toUpperCase()}</h1>
                    <p>${card.id}</p>
                </section>
                <div>
                    <img src='${card.img1}' alt='${card.name}'
                </div> 
                <section>
                    <h2>${card.type1}</h2>
                </section>
                <h3>Characteristics</h3>
                <section>
                    <div>
                        <h5>${card.height / 10} m</h5>
                    </div>
                    <div>
                        <h5>${card.weight / 10} kg</h5>
                    </div>
                </section>
                <section>
                    <p>${card.description}</p>
                </section>
                <h3>Base Stats</h3>
                <section>
                    <div>
                        <h5>${card.hp}</h5>
                        <h5>${card.attack}</h5>
                        <h5>${card.defende}</h5>
                    </div>
                </section>
            </li>
            ` 
        } else {
            cardsUl.innerHTML += `
        <li id='${card.name}' class='pokeCards' 'type_${card.type}'>            
            <section>
                <h1>${card.name.toUpperCase()}</h1>
                <p>${card.id}</p>
            </section>
            <div>
                <img src='${card.img1}' alt='${card.name}'
            </div> 
            <section>
                <h2>${card.type1}</h2>
                <h2>${card.type2}</h2>
            </section>
            <h3>Characteristics</h3>
            <section>
                <div>
                    <h5>${card.height / 10} m</h5>
                </div>
                <div>
                    <h5>${card.weight / 10} kg</h5>
                </div>
            </section>
            <section>
                <p>${card.description}</p>
            </section>
            <h3>Base Stats</h3>
            <section>
                <div>
                    <h5>${card.hp}</h5>
                    <h5>${card.attack}</h5>
                    <h5>${card.defende}</h5>
                </div>
            </section>
        </li>
        `
        } 
    }
    cardsContainer.appendChild(cardsUl);
    cardFinderInput.addEventListener('input', (ev) => filterList(list, ev.target.value))

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