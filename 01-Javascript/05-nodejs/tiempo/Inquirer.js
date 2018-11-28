'use strict';

//instalo npm install inquirer que pertenece a JS
var inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'list',
        name: 'descripción',
        message: 'Hola en que puedo ayudarte?',
        message2:'El costo de la hora es de $1',
        choices: [
            'Guardar por horas',
            'Hacer una reservacion',
            new inquirer.Separator(),
            'Preguntar el tiempo',
            {
                name: 'Contacto',
                disabled: 'no hay espacio'
            },
            'hablar con el cuidador'
        ]
    },
    {
        type: 'lista',
        name: 'tamanio',
        message: 'que necesita?',
        choices: ['Por mes', 'por noche', 'por día', 'por horas'],
        filter: function(val) {
            return val.toLowerCase();
        }
    }
])
.then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});