
/*
# 1) Busque los tipos de "gender" en el arreglo `people.json` gmal, map
## 2) Busque los tipos de "eye_color" en el arreglo `people.json`
## 3) Busque los tipos de "skin_color" en el arreglo `people.json`
## 4) Busque los tipos de "hair_color" en el arreglo `people.json`*/
//import {Observable} from "rxjs/Observable;
//import "rxjs/add/observable/interval;
//import 'rxjs/add/observable/of';
const arreglo = require('../data/people.json');

/*

const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const disctinct = require('rxjs/operators').distinct;

const observableUno$ = rxjs.of(arreglo);
observableUno$
    .pipe(disctinct(), map((gender) => {

        console.log(gender);
        return{
            data:gender
        };
    }));


const ojosColor$ = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        reject(':(');
    });
};
const observableDePromesa$ = rxjs.from(ojosColor$(arreglo));
observableDePromesa$
    .pipe(disctinct(),map((valor) => {
        return {
            data: valor
        };
    }));
//3
const skin_color$ = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        reject(':(');
    });
};
const observableDePromesaColor$ = rxjs.from(skin_color$(arreglo));
observableDePromesaColor$
    .pipe(disctinct(),map((valor) => {
        return {
            data: valor
        };
    }));
//4 hair
const hair_color$ = () => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        reject(':(');
    });
};
const observableDePromesahair$ = rxjs.from(hair_color$(arreglo));
observableDePromesahair$
    .pipe(disctinct(),map((valor) => {
        return {
            data: valor
        };
    }))
    .subscribe((ok) => {
        console.log('En ok', ok);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completado');
        console.log(JSON.stringify(arreglo));
    });


//5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
const observable$ = rxjs.of(arreglo);
observableUno$
    .pipe(disctinct(), map((gender) => {

        console.log(gender);
        return{
            data:gender
        };
    }));

/!*!//10
## 10) Calcular en cuantos films han aparecido cada personaje:

    Ej:

        ```typescript
const respuesta = [
    ...,
    {
        nombre:"Cliegg Lars",
        numeroPeliculas:5
    },
    ...
]
```*!/
const personaje: {//Los 2 puntos es el TIPO
    nombre: string;
    apellido: string;
    pelicula?: number|string;//el signo ? es opcional
} =//EL Igual es el valor
    {
        nombre: '',
        apellido: '',
        pelicula:'',
    };
*/
