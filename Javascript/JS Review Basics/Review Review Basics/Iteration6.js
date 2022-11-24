//----------**Iteración #6: Función swap**------------
console.log('----------**Iteración #6: Función swap**------------');
/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del
array. La función deberá intercambiar la posición de los valores de los indices que hayamos
enviado como parametro. Retorna el array resultante.
Sugerencia de array:
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']*/

const furgolPrayers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, prayer1, prayer2) {
    const swap1 = array.indexOf(prayer1);
    const swap2 = array.indexOf(prayer2);

    array.splice(swap1, 1, prayer2);
    array.splice(swap2, 1, prayer1);
    console.log(array);
};

swap(furgolPrayers, 'Mesirve', 'Ronalguiño');

