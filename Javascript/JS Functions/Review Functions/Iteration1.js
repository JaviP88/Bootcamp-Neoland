/*---------------**Iteración #1: Buscar el máximo**-----------------

Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  // insert code
}*/
function sum (numberOne, numberTwo){
  if (numberOne > numberTwo){
    console.log(`El número más alto es: ${numberOne}`);
  } else if (numberOne < numberTwo){
    console.log(`El número más alto es ${numberTwo}`);
  } else (console.log('Los dos números son iguales'));
};
sum (6, 4);
sum (2, 8);
sum (5, 5);

// Con arrow functions sería:
const sumArrow = (numberOne, numberTwo) => {
  if (numberOne > numberTwo){
    console.log(`El número más alto es: ${numberOne}`);
  } else if (numberOne < numberTwo){
    console.log(`El número más alto es ${numberTwo}`);
  } else (console.log('Los dos números son iguales'));
};
sumArrow (6, 4);
sumArrow (2, 8);
sumArrow (5, 5);