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

console.log(rollDice(3));