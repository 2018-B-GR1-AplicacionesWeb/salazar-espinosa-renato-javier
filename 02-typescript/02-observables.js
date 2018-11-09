//obsevable .ts
//import {}from 'rxjs';
//import {Observable}from 'rxjs';
var ownKeys = Reflect.ownKeys;
// 02-observables.ts
// import { PaqueteUno, Paquete dos} from 'rxjs';
// import * as rxjs from 'rxjs';
// import {Observable} from "rxjs";
// declare var module:any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;
const observableUno$ = rxjs.of([1, 2, 3], 3, 'Hola', 3, true, 3, { nombre: 'Adrian' }, new Date(), 3);
console.log(observableUno$);
observableUno$
    .pipe(disctinct(), map((valor) => {
    console.log('Valor', valor);
    return {
        data: valor
    };
}))
    .pipe()
    .pipe()
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log(error);
}, () => {
    console.log('Completado');
});
const promesita = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        reject(':(');
    });
};
const observableDePromesa$ = rxjs.from(promesita());
observableDePromesa$
    .pipe(map((valor) => {
    return {
        data: valor
    };
}))
    .subscribe((objetoFeliz) => {
    console.log(objetoFeliz);
}, (error) => {
    console.log(error);
});
async function ejeutarCodigoSyncrono() {
    console.log('inicio');
    try {
        const resultadoProemsita = await promesita();
        console.log(resultadoProemsita);
    }
    catch (e) {
        console.log('error en promesita');
    }
    console.log('fin');
}
;
