import {Body, Controller, Get, Param, Post, Query, Res, BadRequestException} from "@nestjs/common";
import {FindManyOptions, Like} from "typeorm";
import { RolesporusuarioEntity } from "./rolesporusuario.entity";
import { validate } from "class-validator";
import { RolesporusuarioService } from "./rolesporusuario.service";

@Controller('rolesporusuario')
export class RolesporusuarioController {

    constructor(
        private rolesporusuarioservice:RolesporusuarioService
       ) {

    }
    @Post('ingresaRolporusuario')
    async registrarRolController(
        @Body() roles: RolesporusuarioEntity,
        @Res() response,
    ) {
        console.log('valores que llego a rol por usuario controller',roles)
        const rolnuevo = new RolesporusuarioEntity();
        rolnuevo.rolforenkey=roles.rolforenkey;
        rolnuevo.usuarioforenkey=roles.usuarioforenkey;

        const arregloErrores = await validate(rolnuevo)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {
            
            console.error('errores: creando al usuario', arregloErrores[0].constraints)
            response.render(
                'registroAplicacion',
                {
                    mensaje: arregloErrores

                });

            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            this.rolesporusuarioservice.crear(rolnuevo);
            console.log('variable fecha naciemineto', rolnuevo)
            response.render(
                'addroles',
                {
                    mensajeok: rolnuevo

                });
            return rolnuevo;
        }

    }


   
}




