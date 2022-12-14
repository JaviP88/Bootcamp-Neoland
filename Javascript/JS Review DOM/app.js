/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Con innerHTML
const newUl = document.createElement('ul');
for (const country of countries) {
    newUl.innerHTML += `<li>${country} --- Creado con innerHTML</li>`
};

document.body.appendChild(newUl);

//Con appendChild

const newUl1 = document.createElement('ul');

for (const country of countries) {
    const newLi1 = document.createElement('li');
    let textCountry = document.createTextNode(`${country} --- Creado con appendChild`);
    newLi1.appendChild(textCountry);
    newUl1.appendChild(newLi1);
}

document.body.appendChild(newUl1);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const removeElement = document.querySelector('.fn-remove-me');

removeElement.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere = document.querySelector('[data-function="printHere"]');

//Con innerHtml
const newUl2 = document.createElement('ul');
for (const car of cars) {
    newUl2.innerHTML += `<li>${car} --- Creado con innerHTML</li>`
};
printHere.appendChild(newUl2);
//Con appendChild
const newUl2Append = document.createElement('ul');
for (const car of cars) {
    const newLi2 = document.createElement('li');
    const newText = document.createTextNode(`${car} --- Creado con appendChild`)
    newLi2.appendChild(newText);
    newUl2Append.appendChild(newLi2);
};
printHere.appendChild(newUl2Append);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const newUlCountriesList = document.createElement('ul');

for (const country of countries1) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.innerHTML += `
    <h4>${country.title}</h4>
    <img src=${country.imgUrl} alt=${country.title}>
    `;
    li.appendChild(div);
    newUlCountriesList.appendChild(li);
}
document.body.appendChild(newUlCountriesList);

//Con este segundo código funciona pero le tienes que dar 2 veces al botón para que borre el li.
/*const newUlCountriesList = document.createElement('ul');
for (const country of countries1) {
    newUlCountriesList.innerHTML += `
    <li>
    <div>
    <h4>${country.title}</h4>
    <img src=${country.imgUrl} alt=${country.title}>
    </div>
    </li>
    `
};
document.body.appendChild(newUlCountriesList);*/

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/

//Creamos el botón
const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = `Elimina el último`;
document.body.appendChild(deleteBtn);

// Le damos funcionalidad
deleteBtn.addEventListener('click', () => {
    newUlCountriesList.removeChild(newUlCountriesList.lastChild);
});

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/