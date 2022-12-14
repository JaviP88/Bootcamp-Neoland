/* --------------------------**Iteración #1: Variables**--------------------------*/

// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

const myFavouriteHero = 'Hi, my favourite hero is ' + 'Hulk' + '.';
console.log(myFavouriteHero);

// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50;
console.log(x);

// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 

let h = 5;
let y = 10;
console.log(h);
console.log(y);

// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let z = h + y;
console.log(z);



/*-------------**Iteración #2: Variables avanzadas**---------------*/

/* 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

/* 1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/

const firstName = 'Jon';
const lastName = 'Snow';
const age = 24;
const phrase = 'Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.';
console.log(phrase);

/* 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};*/

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

/* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};*/

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log('El valor final del 🚗 ' + car1.name + ' 🍬 es ' + car1.finalPrice + ' $.');
console.log('El valor final del 🚗 ' + car2.name + ' 🐟 es ' + car2.finalPrice + ' $.');



/*-------------------**Iteración #3: Operadores**-------------------------*/

// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

let mul = 10 * 5;
console.log(mul);

// 1.2 Divide 10 por 2 y muestra el resultado en un console.

let div = 10 / 2;
console.log(div);

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.

let divDec = 15 / 9;
console.log(divDec);

// 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.

const p = 10;
const j = 5;
const o = p + j;
console.log(o);

// 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.

const c = 10;
const m = 5;
const i = c * m;
console.log(i);



/*---------------**Iteración #4: Arrays**--------------*/

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN".
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

avengers.fill('Ironman', 0, 1);
console.log(avengers);

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/

console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

rickAndMortyCharacters.push ('Lapiz Lopez');
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);

console.log(rickAndMortyCharacters[0] + ', ' + rickAndMortyCharacters[4]);

/* 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/

const rickAndMortyCharactersNew = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersNew.splice(1,1);
console.log(rickAndMortyCharactersNew);



/*------------------**Iteración #5: Condicionales**-----------------*/

// En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

/* ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}*/

if(number1 === 10){
	console.log('number1 es estrictamente igual a 10')
}

/*if ( COMPLETAR ) {
  console.log("number2 dividido entre number1 es igual a 2");
} */

if(number2 / number1 == 2){
	console.log('number2 dividido entre number1 es igual a 2');
}

/*if ( COMPLETAR ) {
  console.log("number1 es estrictamente distinto a number2");
}*/

if(number1 !== number2){
	console.log('number1 es estrictamente distinto a number2');
}

/*if ( COMPLETAR ) {
  console.log("number3 es distinto number1");
}*/

if(number3 != number1){
	console.log('number3 es distinto a number1');
}

/*if ( COMPLETAR ) {
  console.log("number3 por 5 es igual a number1");
}*/

if(number3 * 5 == number1){
	console.log('number3 por 5 es igual a number1');
}

/*if ( COMPLETAR ) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}*/

if(number3 * 5 ==number1 && number1 * 2 ==number2){
	console.log('number3 por 5 es igual a number1 Y number1 por 2 es igual a number2');
}

/*if ( COMPLETAR ) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}*/

if(number2 / 2 == number1 || number1 / 5 == number3){
	console.log('number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3');
}



/*---------------------**Iteración #6: Bucles**--------------------------*/

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for(let ii = 0; ii <= 9; ii++){
	console.log(ii);
}

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

for(let oo = 0; oo <= 9; oo++){
	console.log(oo / 2 == 0);
}

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/

for(let oveja = 0; oveja <= 9; oveja++){
	if(oveja <= 8){
		console.log('Intentando dormir 🐑');
	}
	else {
		console.log('Dormido 💤');
	}
}