//proyecto 2
declare var Promise;

const inquirer = require('inquirer');
const preguntasMenu =
    {
        type: 'list',
        name: 'opcio menu',
        message: 'What do you want to do?',
        choices: [
            'crear',
            'borrar', 'buscar', 'actualizar',

        ]
    };

async function main() {
    try {
        const respueta = inquirer.prompt(preguntasMenu);
        console.log(respueta);
    } catch (e) {
        console.log('hubo un error');

    }

}
main();

