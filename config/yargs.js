const argv = require ('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la multiplicacion'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'Indica si mostrar el listado de la tabla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Inidica hasta cuando multiplicar'
                })
                .check( (argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base debe ser un numero'
                    } else { 
                        if (isNaN(argv.h)) {
                            throw 'Hasta debe ser un numero'
                        } else {
                            return true;
                        }
                        
                    }
                })
                .argv;
module.exports = argv;                