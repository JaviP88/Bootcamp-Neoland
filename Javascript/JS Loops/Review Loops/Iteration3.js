//----------------**Iteración #3: Probando For...of**---------------
console.log('----------------**Iteración #3: Probando For...of**---------------')
/*Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log***
sus valores.
Puedes usar este array:*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let place of placesToTravel){          // No es necesario el 'let', pero es buena práctica ponerlo
    console.log(place);
};
