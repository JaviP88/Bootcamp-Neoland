//-------------**Iteración #1: Usa includes**------------------
console.log('-------------**Iteración #1: Usa includes**------------------')
/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra
"Camiseta". Usa la función .
***includes*** de javascript.*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

// Si simplemente lo quiero sacar por consola sería:
for (let product of products){
    if (product.includes('Camiseta')){
        console.log(product);
    };
};

//Si quiero guardar el resultado en una variable tipo array sería:
let camisetaList = [];
for (let product of products){
    if (product.includes('Camiseta')){
        camisetaList.push(product);
    };
};
console.log(camisetaList)
