const fs = require('fs');
const colors = require('colors');
const {crearArch} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//const base = 8;

//console.log(process.argv);
//console.log(argv);
//console.log('La base de yargs ',argv.b);

//const[,,arg3 = 'base=5'] = process.argv; 

crearArch(argv.b, argv.l, argv.h)
    .then (archivo =>  console.log(`tabla-${argv.b}.txt creado!`.zebra))
    .catch (err => console.log('ATENCION OCURRIO UN ERROR !!!',err))
