//requires

/*const express = require('express');
const farchivo = require('./archivo');*/


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js') // hacemos el require del archivo y sacamos directamente la funcion que nos sirve para esta aplicación

const argv = require('./config/yargs').argv;

//let base = process.argv[2].split("=")[1]; // en esta linea hacemos sacamos el proceso ejecutado donde podemos introducir la base por consola

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

console.log(comando.toUpperCase(), '\n');
console.log(`Base: ${base}`);
console.log(`Limite: ${limite}\n`);


if (comando === 'listar') {

    listarTabla(base, limite)
        .then(tabla => console.log(`\ntabla impresa: ${tabla}`))
        .catch(err => console.log(err))

} else if (comando === 'crear') {

    crearArchivo(base, limite)
        .then(archivo => console.log(`Archivo creado: ${archivo} `))
        .catch(err => console.log(err))

} else {

    console.log('Ingresa un comando valido para la aplicación. Comando actual: ', argv.key);
}