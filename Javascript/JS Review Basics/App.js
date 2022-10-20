//-------------**Iteración #1: Mix for e includes**-----------
console.log('-------------**Iteración #1: Mix for e includes**-----------');
/* Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array
con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que 
las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()** */

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
filmCategories = [];
categoriesNoRepeat = []

for(let movie of movies){
    filmCategories.push(movie['categories']);
    }
filmCategories = filmCategories.flat();

for(let categoriesMovie of filmCategories){
    if(!categoriesNoRepeat.includes(categoriesMovie)){
        categoriesNoRepeat.push(categoriesMovie);
    }
}
console.log(categoriesNoRepeat);


//-------------**Iteración #2: Mix Fors**------------
console.log('-------------**Iteración #2: Mix Fors**------------');
/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos
favoritos que tienen los usuarios. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumeList = [];

for(const user of users){
    for(key in user.favoritesSounds){
        volumeList.push(user.favoritesSounds[key].volume);
    }
}
console.log(volumeList);

let counter = 0;

for(volumeSum of volumeList){
    counter += volumeSum;
}

let averageVolume = counter / volumeList.length;
console.log('El resultado de la media es:');
console.log(averageVolume);                         // El reultado de la media es 57.25



//------------**Iteración #3: Mix Fors**------------
console.log('------------**Iteración #3: Mix Fors**------------');
/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada
sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa
forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese
sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y
oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */

const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
// 1º hay que sacar el array de sonidos.
let favoritesSoundsList =[];

for(const user of users2){
    for(const key in user.favoritesSounds){
        favoritesSoundsList.push(key);
    }
}

// 2º hay que sacar las veces que se repite un sonido.
const favSoundsCounter = [];
for(const sound of favoritesSoundsList){
    counter = 0;
    for(const repeatSound of favoritesSoundsList){
        if(sound === repeatSound){
            counter++;
        }
    }
favSoundsCounter.push(`${sound}: ${counter}`);
}

//3º hay que quitar los sonidos que se repiten.
const favSoundsNoDuplicate = [];
for(soundAlone of favSoundsCounter){
    if(!favSoundsNoDuplicate.includes(soundAlone)){
        favSoundsNoDuplicate.push(soundAlone);
    }
}
console.log(favSoundsNoDuplicate);



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

const findArrayIndex = (array, text) => {
  if(array.includes(text)){
    console.log(`${text}, está en la posición ${array.indexOf(text)}.`);
  } else {
    console.log(`${text}, no está en esta lista.`);
  }
}
findArrayIndex(bugs, 'Mosquito');
findArrayIndex(pokemon, 'Gengar');
findArrayIndex(sports, 'Quidich');

//------ Así se podría hacer con un forEach----- 
console.log('------ Así se podría hacer con un forEach-----');

const findArrayIndex2 = (array, text) => {
    let position = [];
    array.forEach((element, index) => {
        if(text === element){
            position.push(element + ' está en la posición ' + index);
        }
    });
    return position;
}
let findIndexBugsMosquito = findArrayIndex2(bugs, 'Mosquito');
console.log(findIndexBugsMosquito);

let findIndexPokemonGengar = findArrayIndex2(pokemon, 'Gengar');
console.log(findIndexPokemonGengar);

let findIndexSportsQuidich =findArrayIndex2(sports, 'Quidich');
console.log(findIndexSportsQuidich);


//------------**Iteración #5: Función rollDice**------------
console.log('------------**Iteración #5: Función rollDice**------------');

/*Crea una función llamada **rollDice()** que reciba como parametro el numero de
caras que queramos que tenga el dado que deberá simular el codigo dentro de la
función. Como hemos dicho, que la función use el parametro para simular una
tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero
aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();** */

const rollDice = (numberFaces) => {
    return Math.floor(Math.random() * (numberFaces - 0 + 1) + 0);   //operar con 0 es por seguir la fórmula, ya que el mínimo de mi dado es 0
}

console.log(rollDice(56));

//----------**Iteración #6: Función swap**------------
console.log('----------**Iteración #6: Función swap**------------');
/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del
array. La función deberá intercambiar la posición de los valores de los indices que hayamos
enviado como parametro. Retorna el array resultante.
Sugerencia de array:
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']*/

const furgolPrayers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const swap = (team, prayer1, prayer2) => {
    let change1 = team.indexOf(prayer1);
    let change2 = team.indexOf(prayer2);

    team.splice(change1, 1, prayer2);
    team.splice(change2, 1, prayer1);
}

swap(furgolPrayers, 'Mesirve', 'Fernando Muralla');
console.log(furgolPrayers);
