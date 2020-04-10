const fs = require('fs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no corresponde a un numero`);
            return 0;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else { resolve(`tabla-${base}-limite-${limite}`) }

        });
    })
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no corresponde a un numero`);
            return 0;
        } else {
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${base*i}`);
            }
            resolve(`tabla-${base}-limite-${limite}`)
        }




    })

}

module.exports = {
    crearArchivo,
    listarTabla
}