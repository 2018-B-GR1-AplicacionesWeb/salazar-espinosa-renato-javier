const  fs = require ('fs');


const contenidoAAgregar ='JAVIER\n';
const nombreAgregar ='05-texto.txt';
console.log('inicio');
fs.readFile ('04-operadores.js',
    'utf-8',
    (error,contenidoArchivo)=>{ //callback
    if(error){

        console.log(error);
        try{
        }catch (e) {
            console.log(e);
        }
        //throw new Error(error);
        console.log('extra')
}else{
    console.log('si sirvio',contenidoArchivo);
}});
console.log('fin');
