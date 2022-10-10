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



