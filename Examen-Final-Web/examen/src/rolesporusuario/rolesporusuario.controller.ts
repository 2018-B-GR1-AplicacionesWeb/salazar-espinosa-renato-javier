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
            console.log('ID DE VARIABLE ROL POR USER', roles.usuarioforenkey)
            const parametrosConsulta = `?id=${roles.usuarioforenkey}`;

            response.redirect('/usuario/listarrolesporusuario' + parametrosConsulta);
            return rolnuevo;
        }

    }
    @Get('eliminarroles')
    async eliminareventos(
        @Query('ide') ide: number,
        @Query('iduser') iduser: number,
        @Res() response
        ): Promise<RolesporusuarioEntity> {

            console.log('valores que llega a eliminar roles-------------------------->',ide,"id user",iduser)
        const rolEncontrado = await this.rolesporusuarioservice.buscarPorId(ide)
        // console.log('valor que llega metodo eliminar usuario ',ide)
        // console.log('valor de usuario encontrado',aplicacionEncontrado)
        if (rolEncontrado) {
            const parametrosConsulta = `?id=${iduser}`;

            response.redirect('/usuario/listarrolesporusuario' + parametrosConsulta);
            return await this.rolesporusuarioservice.eliminar(ide)
        }
        else {
            response.render(
                'tablaeventos',
                {
                    mensajeerror: 'NO ELIMINA POR PROBLEMAS DE DEPENDENCIAS'

                });
            throw new BadRequestException('Roles de usuario no existe')
        }
    }


   
}




