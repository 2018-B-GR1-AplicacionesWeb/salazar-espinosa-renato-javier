var arreglo=[];
arreglo=[1,"JAVIER",null,new Date(),{nombe:"javier"},
[1,2,true]
];

console.log(arreglo)
arreglo.push(3);//como no es tipado
console.log(arreglo);
arreglo.pop();//para elimnar el untimo
var arregloNumeros=[1,2,3,4,5];
arregloNumeros.splice(1,0,1.1);
console.log(arregloNumeros);
arregloNumeros.splice(4,1);
console.log(arregloNumeros);
//borrar dos
 var indiceDelNumerroDos = arregloNumeros.indexOf(2); //usco un numero en e; indice
 console.log(indiceDelNumerroDos);
 arregloNumeros.splice(indiceDelNumerroDos,0,1.2,1.3,1.4,1.5,1.6,1.7);
console.log(arregloNumeros); //coamn all i
var indiceunoSiee=arregloNumeros.indexOf(1.7);
console.log(arregloNumeros[indiceunoSiee]);
console.log(arregloNumeros[0]);
var posiscionInicialUnoUno=arregloNumeros.indexOf(1.1);
var posiscionInicialUnoSiete=arregloNumeros.indexOf(1.9);
var dedeelunounoalunosiete=(posiscionInicialUnoSiete-posiscionInicialUnoUno)+1;

arregloNumeros.splice(posiscionInicialUnoUno,dedeelunounoalunosiete);

arregloNumeros.splice(posiscionInicialUnoUno ,posiscionInicialUnoSiete);
console.log(arregloNumeros);
var arrgloUno=[1,2,3];
var arregloDos=[4,5,6];
//se podria hacer con for o while
//Destructuracion de arreglos
console.log(...arrgloUno);
var arreglocompleto=[...arrgloUno , ...arregloDos];
console.log(arreglocompleto);
//destructuracion de objetos
//ej
var renato={
    mascota:{
        nombre:"cachetes"
    },
    fechaNacimientos:new Date('2000-10-01')
};
var datosUsuario={
    ...javier,
    ...renato

};
console.log(datosUsuario);

//OBJETOS
var atributosdelObjeto=Object.keys(datosUsuario);

console.log(atributosdelObjeto);
console.log(datosUsuario[atributosdelObjeto[0]]);


