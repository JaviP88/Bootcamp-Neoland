//--------------**Iteración #2: Condicionales avanzados**--------------
console.log('--------------**Iteración #2: Condicionales avanzados**--------------')
/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y
añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas
compruébalo con un ***console.log***. 

Puedes usar este array para probar tu función:*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];
// Podemos hacerlo con un bucle for...of y un for...in
for (let alumn of alumns){
	let counter = 0;
	for (let key in alumn){
		if (alumn[key] == true){		// key hay que ponerlo entre [] xk en el objeto no hay ninguna key que se llame así.
			counter++
		};
	};
	if (counter >= 2){
		alumn.pass = '*** Is Aproved***';
	} else {
		alumn.pass = '--- Fail ---';
	};
};
console.log(alumns);
