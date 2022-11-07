//-------------**Iteración #4: Probando For...in**---------------
console.log('-------------**Iteración #4: Probando For...in**---------------')
//Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien){
    console.log(`The alien's ${key} is ${alien[key]}`);     // Cuando queremos entrar a todas las propiedades de 'key'
};                                                          // solo podemos hacerlo con [], no vale ni con .key, ni con ['key'] 
