/*--------------**Iteración #7: Buscador de nombres**-----------------------

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe
dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un
true y la posición de dicho elemento y por la contra un false. Puedes usar este array para
probar tu función:*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
// Lo podemos hacer de 2 maneras... una es usando el .includes()
function finderName(param, nameToFind) {
  if (param.includes(nameToFind)){
    console.log(`${nameToFind} está en la posición ${param.indexOf(nameToFind)}`);
  } else {
    console.log(`${nameToFind} no se encuentra en este array.`);
  };
};
finderName(nameFinder, 'Jessica');
finderName(nameFinder, 'Paco');

// Otra es usando .forEach
const finderNameForEach = (param, nameToFind) => {
  let searcher = [];
  param.forEach((name, index) => {
    if (name == nameToFind){
      searcher.push(`${nameToFind} está en la posición: ${index}`);
    };
  });
  console.log(searcher);
};
finderNameForEach(nameFinder, 'Jessica');
finderNameForEach(nameFinder, 'Paco');
