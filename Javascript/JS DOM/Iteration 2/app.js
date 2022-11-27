// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div');			// Creamos el elemento en la memoria
document.body.appendChild(newDiv);					// Insertamos el elemento en el HTML dinamicamente -> sim comillas.

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv1 = document.createElement('div');
let newP = document.createElement('p');
		// Una vez creados los elementos, insertamos uno dentro del otro y lo lanzamos en el documento.
newDiv1.appendChild(newP);
document.body.appendChild(newDiv1);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDivWith6P = document.createElement('div');
	/* Si usamos dentro del bucle un .appendChild, creamos los 6 <p></p>, pero a estos
	no se le puede meter texto. */
	for (let i = 0; i < 6; i++) {
		newDivWith6P.appendChild(document.createElement('p'));
	};
	/* Por otra parte, si usamos dentro del bucle un innerHTML, podemos crear las 6'p'
	con un texto dentro usando las backticks. El += se pone para que no se sobreescriba
	una encima de otra. */ 
	for (let i = 0; i < 6; i++) {
		
		newDivWith6P.innerHTML += `<p>Me han insertado con innerHTML</p>`
	};

document.body.appendChild(newDivWith6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

			// Podemos crear el p con el tecto con un .createTextNode
let newP1 = document.createElement('p');
let newText = document.createTextNode('Soy dínamico con .createTextNode');

newP1.appendChild(newText);
document.body.appendChild(newP1);

			// O podemos hacerlo también con .innerHTML.
let newP2 = document.createElement('p');
newP2.innerHTML = `Soy dinámico con .innerHTML`;

document.body.appendChild(newP2);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const recoverh2 = document.querySelector('.fn-insert-here');
let newTextH2 = document.createTextNode('Wubba Lubba dub dub');

recoverh2.appendChild(newTextH2);

/* También se puede hacer con .innerHTML (solo se va a ver el texto introducido con
innerHTML porque se sobreescribe del anterior) */
const recoverh2Inner = document.querySelector('.fn-insert-here');
recoverh2Inner.innerHTML = `Wubba Lubba dub dub con .innerHTML`;

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

			// 1º creamos el ul
let newList = document.createElement('ul');
			// 2º añadimos a newList las apps usando .innerHTML
	for (const app of apps) {
		newList.innerHTML += `<li>${app}</li>`;
	};

document.body.appendChild(newList);

/* También se puede hacer así:

let ul = document.createElement("ul");
let li;
for (elemento of apps) {
    li = document.createElement("li");
    li.innerHTML = elemento;
    ul.appendChild(li);
}
document.body.appendChild(ul);
*/

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

			// 1º hay que recuperar TODOS los elementos de la clase del HTML
const removeElements = document.querySelectorAll('.fn-remove-me');
			// Hacemos un blucle para ir eliminando uno por uno cada elemento de esa clase.
			/*Si hubiera hecho un .querySelector en lugar de un querySelectorAll, con hacer
			un removeElement.remove() sólo habría borrado el 1º que hay de esa clase; pero
			si se hace un .querySelectorAll y un removeElement.remove(), da un error:
			removeElement.remove() no es una función */
	for (const element of removeElements) {
	element.remove()
	};

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
 	Recuerda que no solo puedes insertar elementos con .appendChild.*/

			//1º creamos la p con el texto.
let newP3 = document.createElement('p');
newP3.innerHTML = `***Voy en medio!***`;

			// 2º llamamos al primer div que encontremos.
const firstDiv = document.querySelector('div');

			// 3º metemos la p después del div con un .insertAdjacentElement
firstDiv.insertAdjacentElement('afterend', newP3);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

//1º recuperamos toda la clase...
const insertHere = document.querySelectorAll('div.fn-insert-here');			//Corrección de error: con div delante del punto, ataca solo a las etiquetas div.

//2º con un bucle, añadimos el texto a cada uno de los div de la clase...
for (const text of insertHere) {
	text.innerHTML = `<p>-> Voy dentro! <-</p>`;
};

// También puede ser así:

/*
let insertarAqui = document.querySelectorAll("div.fn-insert-here");
let nuevaP2;

for (divInsert of insertarAqui){    
    nuevaP2 = document.createElement('p');
    nuevaP2.innerHTML = '-> Voy dentro! <-';
    divInsert.appendChild(nuevaP2);
};
*/

