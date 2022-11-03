/*---------------**Iteración #4: Arrays**--------------*/

// 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const hulk = avengers[0];
console.log(hulk);

/* 4.2 Cambia el primer elemento de avengers a "IRONMAN".
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

    //Hay varias formas de hacerlo. 1º la forma más rudimentaria:
const avengersCopy = [...avengers];
avengersCopy[0] = "IRONMAN";
console.log(avengersCopy);
    // 2º otra forma es con métodos .shift() para eliminar el primero y .unshift() para añadir el nuevo.
const avengersCopy2 = [...avengers];
avengersCopy2.shift();
avengersCopy2.unshift('IRONMAN');
console.log(avengersCopy2);
    // 3º otra forma más rápida es con el método .splice(posiciónInicio, numElementosAModificar, elementosAIncluir) 
const avengersCopy3 = [...avengers];
avengersCopy3.splice(0, 1, 'IRONMAN');
console.log(avengersCopy3);
    // 4º por otro lado también se puede hacer por el método .fill(elementoAIcluir, posicionInicia, posiciónTermina)
const avengersCopy4 = [...avengers];
avengersCopy4.fill('IRONMAN', 0, 1);
console.log(avengersCopy4);

/* 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length);

/* 4.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último
personaje del array*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

/* 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.*/
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters1.pop();
// Para ver el último elemento haré un .length - 1 para que de el valor de la posición última.
console.log(`El primer elemento es ${rickAndMortyCharacters1[0]} y el último es ${rickAndMortyCharacters1[rickAndMortyCharacters.length - 1]}`);

/* 4.6 Elimina el segundo elemento del array y muestra el array por consola.*/
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
