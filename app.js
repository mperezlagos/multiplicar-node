const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require('./conf/yargs').argv;
const colors = require('colors');

console.log('base', argv.base);
console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}