
const arreglo = require('../data/people.json');
//console.log('HOLA MUNDO',arreglo);
/*const  resultado = arreglo.filter(
    function (item) { return item.gender == gender }
);*/
//console.log()
function filter(data ) {
    var result = [];

/* result = data.filter(function (item) { return item.gender=='female'  });
    return result;
}*/
result = data.map(
   resultado=>   resultado.gender
);
return result;
}

var data1 = filter(arreglo);
console.log('[ARREGLO FINAL]',data1);



