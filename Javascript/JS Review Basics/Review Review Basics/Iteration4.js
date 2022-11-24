//--------------**Iteración #4: Métodos findArrayIndex**-------------
console.log('--------------**Iteración #4: Métodos findArrayIndex**-------------');
/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y
un texto y devuelve la posición del array cuando el valor del array sea igual al valor del
texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:

function findArrayIndex(array, text) {}

Ej array:

['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']*/

const bugs = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const pokemon = ['Charmander', 'Squiertle', 'Bulbasaur', 'Mew'];
const sports = ['Quidich', 'Basketnall', 'Spikeball', 'Curling', 'Quidich'];

function findArrayIndex(array, text) {
    if (array.includes(text)){
        console.log(`${text} se encuentra en la posición ${array.indexOf(text)} y ${array.lastIndexOf(text)}`);
    } else {
        console.log(`${text}, no está en este array`);
    };
};

findArrayIndex(bugs, 'Mosquito');
findArrayIndex(bugs, 'Caracol');
findArrayIndex(pokemon, 'Bulbasaur');
findArrayIndex(pokemon, 'Pikachu');
findArrayIndex(sports, 'Quidich');      // Como quiero sacar los 2 elementos, he usado .indexOf y .lastIndexOf
findArrayIndex(sports, 'Spikeball');

