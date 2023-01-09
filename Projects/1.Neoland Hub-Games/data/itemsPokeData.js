
export const itemsPokeList = [];


export const itemFetch = async () => {
    try{
        for (let index = 1; index <= 1607; index++) {
            let itemsURL = `https://pokeapi.co/api/v2/item/${index}`;
    
            const itemFetch = await fetch(itemsURL);
            const itemJSON = await itemFetch.json();

                itemsPokeList.push({
                    id: itemJSON.id,
                    name: itemJSON.name,
                    img: itemJSON.sprites.default,
                    price: itemJSON.cost,
                    type: itemJSON.category.name,
                    description: itemJSON.flavor_text_entries[22].text  
                })

    } 
    } catch(error) {
        console.log(error)
    } 
}

console.log(itemsPokeList)
