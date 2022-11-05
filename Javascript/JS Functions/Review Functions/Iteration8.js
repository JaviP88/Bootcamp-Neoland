 //-------------------**Iteration #8: Contador de repeticiones**----------------------------
 /*Crea una función que nos devuelva el número de veces que se repite cada una de las
 palabras que lo conforma.
 Puedes usar este array para probar tu función:*/
 
 const counterWords = [
   'code',
   'repeat',
   'eat',
   'sleep',
   'code',
   'enjoy',
   'sleep',
   'code',
   'enjoy',
   'upgrade',
   'code'
 ];
 function repeatCounter(list) {
  let counter = 0                 // Esto si no lo pongo da el mismo resultado. Pero en este caso, habría que declarar la variable despues del 1er for..of
  let wordsAndNumber = [];
   for (element of list){
    counter = 0;
    for (findMore of list){
      if (element === findMore){
        counter++;
      };
    };
    wordsAndNumber.push(`${element}: ${counter}`);
   };
  
   let listNoRepeat = [];
    for (item of wordsAndNumber){
      if (!listNoRepeat.includes(item)){
        listNoRepeat.push(item);
      };
    };
    console.log(listNoRepeat);
 };
 repeatCounter(counterWords);

