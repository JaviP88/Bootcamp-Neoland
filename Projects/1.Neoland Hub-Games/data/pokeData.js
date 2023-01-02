
export const pokemonList = [];


export const pokemonFetch = async () => {
    try{
        for (let index = 1; index <= 151; index++) {
            let pokeURL = `https://pokeapi.co/api/v2/pokemon/${index}`;
            let pokeDescription = `https://pokeapi.co/api/v2/pokemon-species/${index}`;
    
            const pokeFetch = await fetch(pokeURL);
            const pokeJSON = await pokeFetch.json();
            const pokeDescriptionFetch = await fetch(pokeDescription);
            const descriptionJSON = await pokeDescriptionFetch.json();
            
            pokemonList.push({
                id: pokeJSON.id,
                name: pokeJSON.name,
                img1: pokeJSON.sprites.other.dream_world.front_default,
                imgFront: pokeJSON.sprites.front_default,
                imgBack: pokeJSON.sprites.back_default,
                animation: pokeJSON.sprites.versions['generation-v']['black-white'].animated.front_default,
                weight: pokeJSON.weight,
                height: pokeJSON.height,
                type: pokeJSON.types[0].type.name,
                //type2: pokeJSON.types[1].type.name
                hp: pokeJSON.stats[0].base_stat,
                attack: pokeJSON.stats[1].base_stat,
                defende: pokeJSON.stats[2].base_stat,
                description: descriptionJSON.flavor_text_entries[26].flavor_text
            })
        } 

    } catch(error) {
        console.log(error)
    } 
}


