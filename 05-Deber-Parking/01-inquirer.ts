

//var inquirer = require('..');
const fs = require('fs'); //vamos a convertir una fucion en una proemsa
// @ts-ignore

const nuevaPromesaLectura = new Promise(
    (resolve, reject) => { //aqui se puede escribir cualquier tipo de codigo
        fs.readFile('07-texto.txt', 'utf-8',
            (error, contenidoDelArchivo) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(contenidoDelArchivo);
                }
            });
    }
);
var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        console.log('hola');
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    console.log('bien',answers);
    });
/*
.then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
});
*/


/*

var inquirer=require('02-comidas');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'theme',
            message: 'What do you want to do?',
            choices: [
                'Order a pizza',
                'Make a reservation',
                new inquirer.Separator(),
                'Ask for opening hours',
                {
                    name: 'Contact support',
                    disabled: 'Unavailable at this time'
                },
                'Talk to the receptionist'
            ]
        },
        {
            type: 'list',
            name: 'size',
            message: 'What size do you need?',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter: function(val) {
                return val.toLowerCase();
            }
        }
    ]);
 /!*   .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
    });*!/
*/