//tpados int edad=1;

var edad=1; //
var sueldo=1.10;
var nombre="javier";
var name=`javier`;
var casado= false;
var gatos=null;//objeto
var cuatroBRAZOS;//undefine
var fecha=new Date();//object las clases no se pouede heredar

console.log('fecha',fecha);
console.log(typeof fecha);
var adrianJSON={
    "nombre":"Adrian",
    "edad":12,
    "sueldo":203.4,
    "casado":false,

    "hijos":null,
    "mascotas":{
        "nombre":"max"
        };

var adrian ={
    'javier':'Javier',
    edad:12,
    casado:false,
    hijos:null,
    mascota:{
        nombre:'max'
    },

    }
};

console.log(adrian.nombre);
//truthy
//falsy
if(true){
    console.log("si");

}else{console.log("no");}