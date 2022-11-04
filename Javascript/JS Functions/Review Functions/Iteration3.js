/*---------------**Iteración #3: Calcular la suma**-------------------

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve
la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}*/

// Se puede hacer con for o for..of:
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let counter = 0
  for (item of param){
    counter += item;
  };
  console.log(counter);
};
sumAll(numbers);
// También lo podemos hacer mediante una arrow function:
const sumAllArrow = (param) => {
  let counter = 0
  for (item of param){
    counter += item;
  };
  console.log(counter);
};
sumAllArrow(numbers);
