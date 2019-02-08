import {Body, Controller, Get, Param, Post, Query, Res, BadRequestException} from "@nestjs/common";
import {FindManyOptions, Like} from "typeorm";
import { AplicacionService } from "./aplication.service";
import { AplicacionEntity } from "./aplication.entity";
import { validate } from "class-validator";

@Controller('aplicacion')
export class AplicacionController {

    constructor(
        private aplicacionservicio:AplicacionService
       ) {

    }
    @Post('ingresoaplicacion')
    async registraraplicacionController(
        @Body() aplicacion: AplicacionEntity,
        @Res() response,
    ) {

        const aplicacionnuevo = new AplicacionEntity();
        aplicacionnuevo.pesoenGigas=aplicacion.pesoenGigas;
        aplicacionnuevo.version=aplicacion.version
        aplicacionnuevo.nombre=aplicacion.nombre
        aplicacionnuevo.urldescarga=aplicacion.urldescarga
        aplicacionnuevo.fechalanzamiento=new Date(aplicacion.fechalanzamiento);
        aplicacionnuevo.costo=aplicacion.costo;

        const arregloErrores = await validate(aplicacionnuevo)
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
            this.aplicacionservicio.crear(aplicacionnuevo);
            console.log('variable fecha naciemineto', aplicacionnuevo)
            response.render(
                'registroAplicacion',
                {
                    mensajeok: aplicacionnuevo

                });
            return aplicacionnuevo;
        }

    }
    @Get('gettablaAplication')
    async findAllaplicacion(
        @Query('busqueda') busqueda: any,
        @Res() response
        )  : Promise<AplicacionEntity[]> {

        let appArray: AplicacionEntity[];
        if (busqueda) {
            const consulta: FindManyOptions<AplicacionEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    }
                ]
            };

            appArray = await this.aplicacionservicio.buscar(consulta);

        } else {
            appArray = await this.aplicacionservicio.buscar();
        }
        response.render(
            'listadoAplicacion',
            {
                arrayaplicacion: appArray

            });

        return appArray;
    }
    @Get('eliminaraplicacion')
    async eliminarusuario(
        @Query('id') id: number,
        @Res() response
        ): Promise<AplicacionEntity> {
        const aplicacionEncontrado = await this.aplicacionservicio.buscarPorId(id)
        console.log('valor que llega metodo eliminar usuario ',id)
        console.log('valor de usuario encontrado',aplicacionEncontrado)
        if (aplicacionEncontrado) {
            response.render(
                'register',
                {
                    mensajeok: aplicacionEncontrado

                });

            return await this.aplicacionservicio.eliminar(id)
        }
        else {
            response.render(
                'login',
                {
                    mensajeerror: 'NO ELIMINA POR PROBLEMAS DE DEPENDENCIAS'

                });
            throw new BadRequestException('Aplicacion no existe')
        }
    }


   
}




