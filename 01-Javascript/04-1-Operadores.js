//operadores
function ejemplo() {
};
var ejemploDos = function () {
};//anonima funcion

var javier = {

    trabajito: function () {
        return 'hola';
    }

};
var arrgloFunciones = [function () {

}];

console.log(typeof ejemploDos);//tipo de dato-> funtion
console.log(ejemplo);// defenicion de la funcion
console.log(ejemplo());//ejecuccion de la funcion


var variableUno;//nunca usar
let variableDos; //usar cunado es mutable( este se asigna a otro valor
variableDos = variableDos + 1;
const pi = 3.141516; //intenten usAR CONST
let arregloNombres = ['A', 'b', 'C'];
arregloNombres[1] = 'B';
arregloNombres.push('x');


const javier1 = {

    nombre1: 'Javier',
    apellido1: 'Salazar'
};
javier1.nombre1 = 'Adrian';
javier1.edad = 24;
javier1.direcion = 'quito';
console.log("arreglo nombre: ", arregloNombres);
console.log(javier1);

console.log('\tFOR-EACH');
arregloNombres.forEach(//escribir codigo que se entienda
    function (valorActual, indiceActual, arreglo) {
        console.log("valor actual", valorActual);
        console.log("indice actual", indiceActual);
        console.log("arreglo", arreglo);    }
);

///FUNCIONES FLECHA
const sumarDosNumeros=(numUNO,numDOS)=>{return numUNO+numDOS};
const elevarAlCuadrado=numero=> numero*numero; //se omite el Return y los parantesis
const elevarAlcuadrado2=(numero)=>numero*numero;
const arregloNombresDos=['E','F','G','H'];







