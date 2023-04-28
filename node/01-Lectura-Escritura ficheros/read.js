const fs = require('fs');

fs.readFile('avengers.json', (err, avengers) => {
    if (err) {
        console.log('❌ Hay un error en el archivo! ❌')
    } else {
        const parsedAvengers = JSON.parse(avengers);
        console.log(parsedAvengers);
    }
});


// ------- 2º Creamos una función para contar la frecuencia de palabras.

 const countWords = (text) => {
    let wordCounts = {};
    let words = text.split(/\b/);

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (word.match(/\w+/)) {
            if (wordCounts[word]) {
                wordCounts[word]++;
            } else {
                wordCounts[word] = 1;
            }
        }
    }

    return wordCounts;
 }

 // Lee un archivo de texto.

 fs.readFile('text.txt', 'utf-8', (error, text) => {
    if (error) {
        console.log('❌❌❌ Error al leer archivo: ' + error);
    } else {
        let wordCounts = countWords(text);
        console.log ('Frecuencia de palabras: ', wordCounts)
    }
 });