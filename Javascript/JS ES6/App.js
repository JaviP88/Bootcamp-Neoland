//----------**Iteración #1: Arrows**-----------
console.log('----------**Iteración #1: Arrows**-----------');
/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */
const a = 10;
const b = 5;
const suma = (a, b) => {
    console.log(a + b);
}
suma(a, b);
suma(50, b);
suma(2, 3);


//------------**Iteración #2: Destructuring**---------------
console.log('------------**Iteración #2: Destructuring**---------------');
/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020} */
const game = {
    title: 'The last us 2',
    gender: ['action', 'zombie', 'survival'],
    year: 2020
}

const {title, gender, year} = game;

console.log(title);
console.log(gender);
console.log(year);


/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];*/
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
}; */
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const {name, race} = animalFunction();

console.log(name);
console.log(race);


/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] } */
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const {name: marca, itv} = car;       // Le he cambiado el nombre por marca.
console.log(marca);
console.log(itv);

const [itv1, itv2, itv3] = itv;
console.log(itv1);
console.log(itv2);
console.log(itv3);



//-----------**Iteración #3: Spread Operator**--------------
console.log('-----------**Iteración #3: Spread Operator**--------------');
 /*3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]*/
const pointsList = [32, 54, 21, 64, 75, 43];

const pointListCopy = [...pointsList];
console.log(pointListCopy);


/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};
console.log(toyCopy);


/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
const pointList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];*/
const pointList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const newPointsList = [...pointsList, ...pointsLis2];
console.log(newPointsList);


/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}*/
const toyyy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const newToysList = {...toyyy, ...toyUpdate};
console.log(newToysList);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors];
colorsCopy.splice(2, 1);
console.log(colorsCopy);


//-------------**Iteración #4: Map**------------
console.log('-------------**Iteración #4: Map**------------');
/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
const users = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map((user) => {
	return user.name;
});
console.log(usersName);


/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const moreUsers = [
	{id:1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
    //Se puede hacer con .charAt() ...
const usersNew1 = moreUsers.map((child) => {
	if(child.name.charAt(0) == 'A'){
		child.name = 'Anacleto Tocahuevos'
	}
	return child.name;
})
console.log(usersNew1);

	//o con .startsWith()

const usersNew2 = moreUsers.map((person) => {
	if(person.name.startsWith('A')){
		person.name = 'Anacleto'
	}
	return person.name;
});
console.log(usersNew2);



/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map((city) => {
	if(city.isVisited === true){
		return city.name + ' (Visited).';
	} else {
		return city.name;
	}
})
console.log(visitedCities);

//-----------**Iteración #5: Filter**-----------
console.log('-----------**Iteración #5: Filter**-----------');
/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
console.log(5.1);
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const over18 = ages.filter(function (age){
	return age > 18;
});
console.log(over18);

// Ahora lo haremos con array function.
const over18Arrow = ages.filter(age => age > 18);
console.log(over18Arrow);


/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
console.log(5.2);
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const arrayPar = ages1.filter(function (age){
	return age % 2 == 0;
});
console.log(arrayPar);
// Con arrow function:
const otherArrayPar = ages1.filter(age => age % 2 == 0);
console.log(otherArrayPar);


/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
console.log(5.3);
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolPlayers = streamers.filter(function(player){
	return player.gameMorePlayed === 'League of Legends'
})
console.log(lolPlayers);

// Y con arrow function:
const lolPlayersArrow = streamers.filter(player => player.gameMorePlayed === 'League of Legends')
console.log(lolPlayersArrow);


/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
console.log(5.4);
/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];*/

const streamersWithU = streamers.filter(function(streamer){
	return streamer.name.includes('u');
});
console.log(streamersWithU);
// Y con arrow function sería:
const streamersWithUArrow = streamers.filter(streamer => streamer.name.includes('e'));
console.log(streamersWithUArrow);


/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/
console.log(5.5);

const lolOver35 = streamers.filter(function (streamer){
	return streamer.gameMorePlayed.includes('Legends') && streamer.age > 35;
});
console.log(lolOver35);
// Y con arrow function sería:
const lolOver35Arrow = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends') && streamer.age > 35);
console.log(lolOver35Arrow);


/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
console.log(5.6);
/*const streamers33 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/
console.log(5.7);
/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>
```*/

//-----------**Iteración #6: Find**-----------
console.log('-----------**Iteración #6: Find**-----------')
//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
console.log('6.1');
const numbers = [32, 21, 63, 95, 100, 67, 43];

const number100 = numbers.find((number) => number == 100);
console.log(number100);


// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
console.log('6.2');
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const movie2010 = movies.find((movie) => movie.date == 2010);
console.log(movie2010);


/* 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
console.log('6.3')
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

// 1º cambio el nombre "name" de la variable objeto "mutation" con un .map para que no se pise.
const mutationChangeName = mutations.map((mutation) => ({
	mutationName: mutation.name,
	mutationDescription: mutation.description
}));
console.log(mutationChangeName);
// Y ahora empezamos el ejercicio.
const findCucushumushu = aliens.find((alien) => alien.name === 'Cucushumushu');
console.log(findCucushumushu);
const findPorompompero = mutationChangeName.find((mutation) => mutation.mutationName === 'Porompompero');
console.log(findPorompompero);
const alienAndMutation = {...findCucushumushu, ...findPorompompero};
console.log(alienAndMutation);



//-------------**Iteración #7: Reduce**-------------
console.log('-------------**Iteración #7: Reduce**-------------');
/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/
console.log('7.1');
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
// Método normal:
const sumAll = exams.reduce(function (accumulator, student){
	return accumulator + student.score;
}, 0);
console.log(sumAll);
// Con arrow functions sería:
const sumAllArrow = exams.reduce((accumulator, student) => accumulator + student.score, 0);
console.log(sumAllArrow);


/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/
// 1º sacamos los alumnos que han aprovado con un .filter
const aproved = exams.filter((student) => student.score >= 5);
console.log(aproved);
// 2º Método normal.
const sumStudentsPass = aproved.reduce(function(acumulatorAproved, student){
	return acumulatorAproved + student.score;
}, 0);
console.log(sumStudentsPass);
// O con arrow function sería:
const sumStudentsPassArrow = aproved.reduce((acumulatorAproved, student) => acumulatorAproved + student.score, 0);
console.log(sumStudentsPassArrow);


//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
// Metodo normal
const media = exams.reduce(function(acumulator, student){
	return acumulator + student.score / exams.length;
}, 0);
console.log(media);
// Con arrow function sería:
const mediaArrow = exams.reduce((acumulator, student) => acumulator + student.score / exams.length, 0);
console.log(mediaArrow);



//-------------**Iteración #8: Bonus**-------------
console.log('-------------**Iteración #8: Bonus**-------------');
/* Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

const findRPG = videogames.filter((videogame) => videogame.genders.includes('RPG'));
console.log(findRPG);
const mediaScoreRPG = findRPG.reduce((acumulate, game) => acumulate + game.score / findRPG.length, 0);
console.log(mediaScoreRPG);

