export const filterBtn = (list, type) => {
    const cardsContainer = document.querySelector('#cardsContainer');
    const cardsUl = document.createElement('ul');
    
    cardsContainer.innerHTML = ``;

    const filteredTypesCard = list.filter((card) =>
     card.type1.includes(type)
    );

    for (const card of filteredTypesCard) {
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
    };
    cardsContainer.appendChild(cardsUl)

}