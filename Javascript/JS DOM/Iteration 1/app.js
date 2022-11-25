
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**
const showBtn = document.querySelector('.showme');              // atacar a clase = '.class'
console.log(showBtn);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const showId = document.querySelector('#pillado');              // atacar a id = '.id'
console.log(showId);
// 1.3 Usa querySelector para mostrar por consola todos los p
const showAllP = document.querySelectorAll('p');
console.log(showAllP);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const showAllPokemon = document.querySelectorAll('.pokemon');
console.log(showAllPokemon);
/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/
const showAllAtribute = document.querySelectorAll('[data-function="testMe"]');       // atacar atributo = '[atibute]'
console.log(showAllAtribute);
/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
console.log(showAllAtribute[2]);        // Como el .querySelectorAll crea un array con todos los elementos, simplemente con atacar a la posición 2 del array en un console.log es suficiente.
