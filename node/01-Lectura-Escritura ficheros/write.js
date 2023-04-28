
const fs = require('fs');
const inquirer = require('inquirer');

const avengers = [
    {
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

const avengersJson = JSON.stringify(avengers);

/* ---------- Parte 1 ---------
Creamos el archivo avengers.json y como usamos el método writeFile, necesita una callback
(si fuera el método writeFileSync, no necesitaría la callback).

El metodo writeFile recibe por params 3 cosas: file, data y callback.
fs.writeFile(file, data[nameFile.json, options], callback) */

fs.writeFile('avengers.json', avengersJson, () => {
    console.log('avengers.json created!! ✅')
})

/* ---------- Parte 2 ------------
Convertimos el archivo JSON a CSV.
Para ello importamos incorporeamos 'fs' (que ya está en el inicio del documento)
Y creamos la función para convertir el objeto JSON a CSV */

const convertJsonToCSV = (jsonData) => {
    let csv = '';

    //Creamos encabezados de columna, los añadimos a csv separados por ';' y damos un salto de pagina.
    let headers = Object.keys(jsonData[0]);
    csv += headers.join(';') + '\n';           // Mejor separar con ';' en lugar de ',' ya que evitamos problemas con los números decimales.

    //Creamos un bucle dentro de otro para recorrer los objetos e ir cogiendo toda la información para cumplimentar las filas.
    jsonData.forEach((row) => {
        headers.forEach((header, index) => {
            if (index > 0) {
                csv += ';'
            };
            csv += row[header];
        });
        csv += '\n';
    });

    return csv;
};


// Convertir JSON a CSV
let csvData = convertJsonToCSV(avengers);   // No entiendo xk tengo que meter entre parentesis el objeto 'avengers' en lugar del 'avengersJson'

// Guardamos CSV en un archivo.
fs.writeFile('avengersCSV.csv', csvData, (error) => {
    if (error) {
        console.log('❌ Error al escribir archivo CSV: ' + error + ' ❌')
    } else {
        console.log('✅ Archivo CSV guardado con exito ✅')
    }
})


/* -------- Parte 3 --------

Vamos a incorporar la biblioteca inquirer haciendo 'npm i --save inquirer' pero esto solo vale
importando la librería con "import inquirer from 'inquirer'".
Si se quiere importar la librería usando require, hay que instalar la versión 8 con:
'npm install --save inquirer@^8.0.0' */

inquirer.prompt([
    {
        type: "list",
        name: "language",
        message: "Qué lenguaje estás usando?",
        choices: ["JavaScript", "TypeScript"],
      },
      {
        type: "confirm",
        name: "template",
        message: "Quieres un template para un proyecto con este lenguaje?",
      },
      {
        type: "input",
        name: "projectName",
        message: "Nombre del proyecto",
        when: (answers) => answers.template,
      },
])
.then((answers) => {
    if (answers.tenplate) {
        const projectName = answers.projectName;
        const language = answers.language;

        //creamos una carpeta con el nombre del proyecto así:
        fs.mkdirSync(projectName);
        // Ahora creamos el archivo y se escribe las configuraciones
        fs.writeFileSync(
            `${projectName}/.prettierrc`,
            JSON.stringify({
                semi: true,
                singleQuote: true,
            })
        ),
        fs.writeFileSync(
            `${projectName}/.eslintrc`,
            JSON.stringify({
                extends: ['eslint:recomended'],
            })
        );
        fs.writeFileSync(`${projectName}/index.html`, "<html></html>");
      fs.writeFileSync(`${projectName}/style.css`, " ");
      if (language === "JavaScript") {
        fs.writeFileSync(`${projectName}/index.js`, "console.log('Hello World!')");
      } else {
        fs.writeFileSync(`${projectName}/index.ts`, "console.log('Hello World!')");
        fs.writeFileSync(
          `${projectName}/tsconfig.json`,
          JSON.stringify({
            compilerOptions: {
              target: "es5",
              module: "commonjs",
              outDir: "dist",
            },
          })
        );
        fs.writeFileSync(
          `${projectName}/package.json`,
          JSON.stringify({
            scripts: {
              build: "tsc",
              start: "node dist/index.js",
            },
            dependencies: {
              typescript: "^4.0.0",
            },
          })
        );
    }
    console.log(`El proyecto "${projectName}" ha sido creado con éxito.`);
    } else {
      console.log("No se ha creado ningún proyecto.");
    }
})