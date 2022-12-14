/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/
const click = document.querySelector('.click');
const btnToClick = document.querySelector('#btnToClick');
btnToClick.addEventListener('click', () => {console.log(click.value)});


// También se puede escribir todo seguido.
// const btnToClick = document.querySelector('#btnToClick').addEventListener('click', (btnToClick) => console.log(btnToClick));


/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const focus = document.querySelector('.focus')
focus.addEventListener('focus', (input) => {console.log(input.target.value)});

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (input) => {console.log(input.target.value)});