// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv1 = document.createElement('div');
let newP = document.createElement('p');

newDiv1.appendChild(newP);
document.body.appendChild(newDiv1);
			
			// Tambien se puede hacer con un innerHTML
let newDiv1Inner = document.createElement('div');
newDiv1Inner.innerHTML = `<p></p>`;
document.body.appendChild(newDiv1Inner);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

			// Se puede hacer con .appendChild: 
let newDiv6P = document.createElement('div');
for (let i = 0; i < 6; i++){
	newDiv6P.appendChild(document.createElement('p'));
};
// document.body.appendChild(newDiv6P);

			// Se puede hacer con .innerHTML:
for (let i = 0; i < 6; i++){
	newDiv6P.innerHTML += `<p>Añadido con inner ${i + 1}</p>`;   // 'i + 1' para mostrar que se añade 6 veces
};
document.body.appendChild(newDiv6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

		// Con appendChild
let newP1 = document.createElement('p');
let newText = document.createTextNode('Soy dinámico con .createTextNode');
newP1.appendChild(newText);

document.body.appendChild(newP1);
			
			// Con .innerHTML
let newP1Inner = document.createElement('p');
newP1Inner.innerHTML = `Soy dinámico con .innerHTML`;

document.body.appendChild(newP1Inner);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
			
const h2 = document.querySelector('.fn-insert-here');
			
			// Con .appendChild
let newText1 = document.createTextNode('Wubba Lubba dub dub .appendChild');
h2.appendChild(newText1);
			
			// Con .innerHTML (se verá éste último por sobreescribir al anterior)
h2.innerHTML = `Wubba Lubba dub dub .innerHTML`;

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

			// Con appendChild
let newUl = document.createElement('ul');
let newLi;
for (const app of apps) {
	newLi = document.createElement('li');
	newLi.innerHTML = `${app}`;
	newUl.appendChild(newLi);
};
document.body.appendChild(newUl);

			// Con innerHTML
let newUl1 = document.createElement('ul');
for (const app of apps) {
	newUl1.innerHTML += `<li>${app}</li>`;
};
document.body.appendChild(newUl1);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let removeElements = document.querySelectorAll('.fn-remove-me');
for (const element of removeElements) {
	element.remove();
};

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
 	Recuerda que no solo puedes insertar elementos con .appendChild.*/

			// Llamamos al primer div que hay
const findFirstDiv = document.querySelector('div');

			// Con appendChild
let newP2 = document.createElement('p');
let newText2 = document.createTextNode('*** Voy en medio. 1º con .appendChild ***');
newP2.appendChild(newText2);

findFirstDiv.insertAdjacentElement('afterend', newP2);

			// Con innerHTML
let newP3 = document.createElement('p');
newP3.innerHTML = `*** Voy en medio. 2º con .innerHTML para ver cómo se coloca delante del 1º***`
findFirstDiv.insertAdjacentElement('afterend', newP3);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertHere = document.querySelectorAll('div.fn-insert-here');		//Con div antes del punto, atacamos solo a los divs con esa clase

			// Con appendChild
for (const div of insertHere) {
	let newP4 = document.createElement('p');
	let newText3 = document.createTextNode('-> Voy dentro con appendChild <-');
	newP4.appendChild(newText3);
	div.appendChild(newP4);
};

			// Con innerHTML
for (const div of insertHere) {
	div.innerHTML += `<p>-> Voy dentro con innerHTML <-</p>`;		// += para que no me borre el anterior
};