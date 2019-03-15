//arreglos
var arreglo = [];
arreglo = [1, 2,
    "JAVIER",
    null,
    new Date(),
    {nombre: "javier"},
    [1, 2, false, true]
];

console.log(arreglo);
arreglo.push(3, 6, 9);
console.log(arreglo);
arreglo.pop();

console.log(arreglo);
var arregloNumeros = [1, 2, 7, 4, 5, 20];
arregloNumeros.splice(1, 0, 1.1);
console.log(arregloNumeros);
arregloNumeros.splice(5, 1, 9);
console.log(arregloNumeros);
var indiceDelNumeroDos = arregloNumeros.indexOf(1);
console.log(indiceDelNumeroDos);
arregloNumeros.splice(2, 0, 1.2, 1.3, 1.4);
console.log(arregloNumeros);

//desctructuracion de arreglos
var arregloUno = [1, 2, 3];
var arregloDos = [4, 5, 6];
var sumaArreglos = [...arregloUno, ...arregloDos, ...arreglo];

console.log(sumaArreglos);
//OBJETOS

var mascota = {
    nombreMascota: "max",
    edad: 4,
    color: 'blanco'
};
var propietario={
    nombre:"cesar",
    apellido:"centro historico",
    domicilio:{
        direccoio:"quito",
        sector:"sur",
        fechaVivienda:new Date("2010-03-22")

    }
};
var contenidoEntidades={...propietario,...mascota};
console.log("entidades con sus Atributos: ",contenidoEntidades);

//objetos, tomo solo los atributos
var atributosDelObjeto=Object.keys(contenidoEntidades);
console.log('atributos del objeto: ',atributosDelObjeto);
console.log(mascota['nombreMascota']);
