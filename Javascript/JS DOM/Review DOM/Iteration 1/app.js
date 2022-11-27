// 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**

let showBtn = document.querySelector('.showme');
console.log(showBtn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let showH1 = document.querySelector('#pillado');
console.log(showH1);

// 1.3 Usa querySelector para mostrar por consola todos los p

let showAllP = document.querySelectorAll('p');
console.log(showAllP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let showAllPokemons = document.querySelectorAll('.pokemon');
console.log(showAllPokemons);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

let showAllAtributes = document.querySelectorAll('[data-function="testMe"]');
console.log(showAllAtributes);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

console.log(showAllAtributes[2]);