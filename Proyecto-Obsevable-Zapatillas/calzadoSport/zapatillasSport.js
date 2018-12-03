var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const timer = require('rxjs').timer;
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const retryWhen = require('rxjs/operators').retryWhen;
const delayWhen = require('rxjs/operators').delayWhen;
const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Buenos días en que puedo ayudarle?',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Actualizar',
        'Salir'
    ]
};
const preguntaBuscarUsuario = [
    {
        type: 'input',
        name: 'idUsuario',
        message: 'Ingrese Codigo de las zapatillas',
    }
];
const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es el codigo de las zapatillas?'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nombre de la zapatillas?'
    },
    {
        type: 'input',
        name: 'precio',
        message: 'Cual es el precio?'
    },
];
const preguntaEdicionUsuario = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nuevo nombre de las zapatillas'
    },
];
function inicialiarBDD() {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                fs.writeFile('bdd.json', '{"usuarios":[]}', (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando',
                            error: 500
                        });
                    }
                    else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse('{"usuarios":[]}')
                        });
                    }
                });
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
// @ts-ignore
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // of(Cualquier cosa JS)
        // from(Promesas)
        const respuestaBDD$ = rxjs.from(inicialiarBDD());
        respuestaBDD$
            .pipe(preguntarOpcionesMenu(), opcionesRespuesta(), ejecutarAcccion(), guardarBaseDeDatos())
            .subscribe((data) => {
            //
            console.log(data);
        }, (error) => {
            //
            console.log(error);
        }, () => {
            main();
            console.log('Complete');
        });
    });
}
function guardarBDD(bdd) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        fs.writeFile('bdd.json', JSON.stringify(bdd), (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd: bdd
                });
            }
        });
    });
}
main();
function preguntarOpcionesMenu() {
    return mergeMap(// Respuesta Anterior Observable
    (respuestaBDD) => {
        return rxjs
            .from(inquirer.prompt(preguntaMenu))
            .pipe(map(// respuesta
        (respuesta) => {
            respuestaBDD.opcionMenu = respuesta;
            return respuestaBDD;
        }));
        // OBSERVABLE!!!!!!!!!!
    });
}
function opcionesRespuesta() {
    return mergeMap((respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case 'Crear':
                return rxjs
                    .from(inquirer.prompt(preguntaUsuario))
                    .pipe(map((zapatillas) => {
                    respuestaBDD.zapatillas = zapatillas;
                    return respuestaBDD;
                }));
            case 'Buscar':
                return consultarid(respuestaBDD);
            case 'Actualizar':
                return preguntarIdUsuario(respuestaBDD);
            case 'Borrar':
                return consultarid(respuestaBDD);
        }
    });
}
function guardarBaseDeDatos() {
    return mergeMap(// Respuesta del anterior OBS
    (respuestaBDD) => {
        // OBS
        return rxjs.from(guardarBDD(respuestaBDD.bdd));
    });
}
function ejecutarAcccion() {
    return map(// Respuesta del anterior OBS
    (respuestaBDD) => {
        const opcion = respuestaBDD.opcionMenu.opcionMenu;
        switch (opcion) {
            case 'Crear':
                const zapatillas = respuestaBDD.zapatillas;
                respuestaBDD.bdd.usuarios.push(zapatillas);
                return respuestaBDD;
            case 'Actualizar':
                const indiceActualizar = respuestaBDD.indiceUsuario;
                if (indiceActualizar === -1) {
                    console.error('Error no existe ese producto en bodega para Actulizar !');
                }
                else {
                    respuestaBDD.bdd.usuarios[indiceActualizar].nombre = respuestaBDD.zapatillas.nombre;
                    console.log('Producto Actulizado con exito');
                }
                return respuestaBDD;
            case 'Buscar':
                const indiceBuscar = respuestaBDD.indiceUsuario;
                if (indiceBuscar === -1) {
                    console.error('Error no existe ese producto en bodega');
                }
                else {
                    console.log('Zapatillas encontradas : ', respuestaBDD.bdd.usuarios[indiceBuscar]);
                }
                return respuestaBDD;
            case 'Borrar':
                const indiceBorrar = respuestaBDD.indiceUsuario;
                if (indiceBorrar === -1) {
                    console.error('Error No existe registro');
                }
                else {
                    console.log('Zapatillas borradas de registro !!', respuestaBDD.bdd.usuarios[indiceBorrar]);
                    const a = respuestaBDD.bdd.usuarios;
                    a.splice(respuestaBDD.bdd.usuarios[indiceBorrar], 1);
                }
                return respuestaBDD;
        }
    });
}
function preguntarIdUsuario(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarUsuario))
        .pipe(mergeMap(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (zapatillas) => {
            return zapatillas.id === respuesta.idUsuario;
        });
        if (indiceUsuario === -1) {
            console.log('Preguntando de nuevo registro no encontrado, no existe');
            return preguntarIdUsuario(respuestaBDD);
        }
        else {
            respuestaBDD.indiceUsuario = indiceUsuario;
            return rxjs
                .from(inquirer.prompt(preguntaEdicionUsuario))
                .pipe(map((nombre) => {
                respuestaBDD.zapatillas = {
                    id: null,
                    nombre: nombre.nombre,
                    precio: null
                };
                return respuestaBDD;
            }));
        }
    }));
}
function consultarid(respuestaBDD) {
    return rxjs
        .from(inquirer.prompt(preguntaBuscarUsuario))
        .pipe(map(// RESP ANT OBS
    (respuesta) => {
        const indiceUsuario = respuestaBDD.bdd
            .usuarios
            .findIndex(// -1
        (zapatillas) => {
            return zapatillas.id === respuesta.idUsuario;
        });
        respuestaBDD.indiceUsuario = indiceUsuario;
        return respuestaBDD;
    }));
}
