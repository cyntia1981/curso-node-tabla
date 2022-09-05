const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    
    let salida = '';
    let consola = '';
    for (let i=1; i<=hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} ${'x'.yellow} ${i} ${'='.bgMagenta} ${base*i}\n`
    }
    
    
    console.clear();
    if (listar) {
        console.log ('======================'.red);
        console.log ('   Tabla del'.rainbow, colors.blue(base));
        console.log ('======================'.red);
        console.log(consola);
    }

    

    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        } catch (err) {
            reject(err);
        }
        resolve(salida);
    });
    
    //fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    //    if (err) throw err;
    //    console.log(`tabla-${base}.txt creado!`);
    //})
    
}

module.exports = {
    crearArch: crearArchivo
}