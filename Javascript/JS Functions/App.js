/*---------------**Iteración #1: Buscar el máximo**-----------------

Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  // insert code
}*/
console.log('Iteracion 1: Buscar el másximo');

function sum(numberOne , numberTwo){
  
  if (numberOne > numberTwo){
    const masAlto1 = 'El número más alto es ' + numberOne;   //Si pongo un return en lugar de console.log (o si aparecen los 2), no me devuelve nada en el terminal.
    return(masAlto1);
  } else if (numberOne < numberTwo){
    return('El número más alto es ' + numberTwo);
  } else{
    return('El número ' + numberOne + ' y el número ' + numberTwo + ' son iguales'); 
  }
}

let result1 = sum(10 , 20);
let result2 = sum(15 , 10);
let result3 = sum(5 , 5);
console.log(result1);
console.log(result2);
console.log(result3);


/*---------------**Iteración #2: Buscar la palabra más larga**---------------

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}*/

console.log('---------------**Iteración #2: Buscar la palabra más larga**---------------');
console.log('-----Solución con for...');
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function theLargestWord(hero) {     // No hace falta crear la variable con hero porque ya la misma función la crea.
  let palabraMasLarga = '';
for(i = 0; i < hero.length; i++){
  if(hero[i].length > palabraMasLarga.length) {
palabraMasLarga = hero[i];
  }
}
return palabraMasLarga;    //Se pone fuera porque si no en cada vuelta que dé, te va a imprimir la palabra más larga.
}

let palabraMasLarga = theLargestWord(avengers);    // Crea una nueva variable que llame la funición.
console.log(palabraMasLarga);                      // Pinta lo que devuelve en pantalla.

console.log('-----Solución con arrow...');


/*---------------**Iteración #3: Calcular la suma**-------------------

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}*/
console.log('---------------**Iteración #3: Calcular la suma**---------------');

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param){
  let acumulator = 0;                     // Crear un acumulador tipo number
  for(i = 0; i < param.length; i++){      // Lo que se itera es param, NO numbers
  acumulator += param[i];                 // Esto es igual a ==> acumulator = acumulator + param[i];
  }
return acumulator;
}

let total = sumAll(numbers);
console.log(total);


/*--------------**Iteración #4: Calcular el promedio**------------------

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}*/

console.log('---------------**Iteración #4: Calcular el promedio**---------------');

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function average(queNoSeMeOlvide) {
  let acumulator = 0;
  for(i = 0; i < queNoSeMeOlvide.length; i++){
    acumulator = acumulator + (queNoSeMeOlvide[i] / queNoSeMeOlvide.length);   ///es igual que ==> acumulator += queNoSeMeOlvide[i] / queNoSeMeOlvide.length;
  }
  return acumulator
}

let totalAverage = average(numbers1);
console.log(totalAverage);

