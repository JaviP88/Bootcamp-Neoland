/*---------------**Iteración #2: Buscar la palabra más larga**---------------

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso
de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// Con un bucle for clásico:

function findLongestWord(param) {
  let longestWord = '';
  for (i = 0; i < param.length; i++){
    if (param[i].length > longestWord.length){
      longestWord = param[i];
    };
  };
  console.log(longestWord);
};
findLongestWord(avengers);

// Con un bucle for..of:

function findLongestWordForOf(param) {
  let longestWord = '';
  for (item of param){
    if (item.length > longestWord.length){
      longestWord = item;
    };
  };
  console.log(longestWord);
};
findLongestWordForOf(avengers);

// Con un Array functions:

const findLongestWordForOfArray = (param) => {
  let longestWord = '';
  for (item of param){
    if (item.length > longestWord.length){
      longestWord = item;
    };
  };
  console.log(longestWord);
};
findLongestWordForOfArray(avengers);
