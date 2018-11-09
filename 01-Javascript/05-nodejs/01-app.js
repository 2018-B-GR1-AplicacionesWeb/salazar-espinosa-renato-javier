
const calculadora= require('./02-calculadora.js');
const util=require('../05-nodejs-02/01-util.js');
const tiempo=require('./tiempo/01-tiempo.js');

const  fs=require('fs');
const  expressjs=require('express');

console.log('calculadora',calculadora.nombreCalcuadora);
console.log('calculadora suma',calculadora.sumarDosNumeros(1,5));
console.log('calculadora multiplica',calculadora.multiplicarDosNumeros(6,5));

console.log('util',util);
console.log('tiempo ',tiempo);
console.log('fs:',fs);
console.log('express *******************:',expressjs);

/*

const util = require('../05-nodejs-02/01-util');
const tiempo = require('./tiempo/01-tiempo');
const fs = require('fs');
const pepito = require('express');


console.log('calculadora', calculadora.nombreCalculadora);
console.log('calculadora', calculadora.sumarDosNumeros(1,2));
console.log('tiempo', tiempo);
console.log('express', pepito);
console.log('fs', fs);
console.log('util', util);*/
