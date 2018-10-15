
holaMundo();
function holaMundo() {
    console.log('hola mundo');
}
console.log(holaMundo());//si no tiene retorno debuelve undefined


function sumardosnumeros(numUno,numDos) {
    var esNumeroUnos=typeof  numUno=='number';
    var esNumeroDos=typeof  numDos=='number';
    if(esNumeroUnos && esNumeroDos){
        return numUno+numDos;
    }else{
        console.error('No envia numeros');
        return 0;
    }
  }


  console.log(sumardosnumeros(1,2));

    console.log(sumardosnumeros("javier",true,null,4,5,6,7));

function sumarNNumeros(...numeros) {

   var respuesta=sumarNumerosDesdeUnArreglo(numeros);

   if(respuesta.noEsNumber){
       console.log('no envia numeros');
       return 0;
   } else {
       return respuesta.resultado;
   }
}

function sumarNumerosDesdeUnArreglo(numeros) {
    var tieneUnParametroDiferentedeNumber=false;
    var resultado=0;
    for (var i=0;i<numeros.length;i++){
    var esNumeroNumber=typeof numeros[i] =='number';
    if(!esNumeroNumber){
        tieneUnParametroDiferentedeNumber=true;
        }else{
        resultado=resultado+numeros[i];
        }
    }

    var respuesta={
    noEsNumber:tieneUnParametroDiferenteDeNumber,
        resultado:resultado
    };

    return respuesta;
}

 //console.log(suma)
//funcion saludar


function saludarEnUpperCase(nombre,funcion){
      return `hola ${funcion(nombre)}`;//tempalte string
}

console.log(saludarEnUpperCase("javier",holaMundo));
console.log(saludarEnUpperCase("RENATO",convertirStringEnMinuscla));
console.log(saludarEnUpperCase("buen dia",anadirpuntoalfinal));

function convertirStringMayuscula(texto) {
    return texto.toUpperCase();
}

function  convertirStringEnMinuscla(texto) {
    return texto.toLowerCase();
}

function  anadirpuntoalfinal(texto) {
    return texto+".";
}

function priemeraLetraMayuscula(texto) {
    var priemeletra=texto[0].toUpperCase();
    var restoPalabra=texto.slice(1,texto.length);
    return  priemeraLetraMayuscula+restoPalabra;
}
console.log(saludarEnUpperCase("javier",priemeraLetraMayuscula));