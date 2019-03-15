holaMundo();

function holaMundo() {
    console.log("hola mundo");

}

console.log(holaMundo());

function sumardosNumeros(numUo, numDos) {
    var esNumberUnoNumber = typeof  numUo === 'number';
    var esNumberDosNumber = typeof  numDos === 'number';

    if (esNumberUnoNumber && esNumberDosNumber) {
        return numUo + numDos;
    } else {
        console.log('No envia error');
        return 0;
    }

}

console.log(sumardosNumeros(1, 2));
console.log(sumardosNumeros('JAVIER',true, 2, 3, 4, 5, 6, 7));
function primeraLetraMayuscula(texto) {
    var primeraLetra=texto[0].toUpperCase();
    var restoPalabra=texto.splice(1,texto.length);
    var respuesta=primeraLetra+restoPalabra;
    return primeraLetra+restoPalabra;
    console.log(respuesta);

}


