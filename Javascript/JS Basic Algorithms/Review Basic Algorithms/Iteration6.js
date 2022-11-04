/*---------------------**Iteración #6: Bucles**--------------------------*/

//6.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
//Este ejercicio voy a meter los resultados en un array.
const arrayNum = [];
for (let i = 0; i <= 9; i++){
    arrayNum.push(i);
};
console.log(arrayNum);

/*6.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

for (let ii = 0; ii <= 9; ii++){
    if ([ii] % 2 == 0){
        console.log(ii);
    };
};


/*6.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'.*/
for (j = 0; j < 10; j++){
    if (j < 9){
        console.log('🐑 Intentando dormir 🐑')
    } else {
        console.log('💤 Dormido 💤')
    };
};
