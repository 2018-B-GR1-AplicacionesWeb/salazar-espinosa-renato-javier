import {menu} from "./01-menu.js";
let inquirer = require('inquirer');
let fs = require('fs');

//console.log (menuPrincipal);
inquirer
    .prompt(
        menu
    )
    .then(
        (respuesta)=>[
            console.log (respuesta)

        ]
    );