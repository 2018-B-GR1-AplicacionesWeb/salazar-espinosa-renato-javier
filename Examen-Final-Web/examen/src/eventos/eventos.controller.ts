import { Body, Controller, Get, Param, Post, Query, Res, BadRequestException } from "@nestjs/common";
import { FindManyOptions, Like } from "typeorm";
import { EventoService } from "./eventos.service";
import { EventoEntity } from "./eventos.entity";
import { EventosDto } from "./eventos.dto";
import { validate } from "class-validator";


@Controller('eventos')
export class EventoController {

    constructor(
        private readonly _eventoService:EventoService ) {

    }
    @Get('gettablaEventos')
    async findAllEvent(
        @Query('busqueda') busqueda: any,
        @Res() response
        )  : Promise<EventoEntity[]> {
            console.log('NO LLEGA')
        let eventosArray: EventoEntity[];
        if (busqueda) {
            const consulta: FindManyOptions<EventoEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    }
                ]
            };

            eventosArray = await this._eventoService.buscar(consulta);

        } else {
            eventosArray = await this._eventoService.buscar();
        }
        response.render(
            'tablaeventos',
            {
                arrayEventos: eventosArray

            });

        return eventosArray;
    }
    @Get('eliminareventos')
    async eliminareventos(
        @Query('id') id: number,
        @Res() response
        ): Promise<EventoEntity> {
        const aplicacionEncontrado = await this._eventoService.buscarPorId(id)
        console.log('valor que llega metodo eliminar usuario ',id)
        console.log('valor de usuario encontrado',aplicacionEncontrado)
        if (aplicacionEncontrado) {
            response.render(
                'tablaeventos',
                {
                    mensajeok: aplicacionEncontrado

                });

            return await this._eventoService.eliminar(id)
        }
        else {
            response.render(
                'tablaeventos',
                {
                    mensajeerror: 'NO ELIMINA POR PROBLEMAS DE DEPENDENCIAS'

                });
            throw new BadRequestException('Aplicacion no existe')
        }
    }
    @Post('ingresoeventos')
    async registraraplicacionController(
        @Body() eventoparametro: EventoEntity,
        @Res() response,
    ) {

        const eventoEventos = new EventoEntity();
        eventoEventos.nombre=eventoparametro.nombre;
        eventoEventos.longitud=eventoparametro.longitud;
        eventoEventos.latitud=eventoparametro.latitud;
        eventoEventos.fecha=eventoparametro.fecha;
        const arregloErrores = await validate(eventoEventos)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {
            console.error('errores: creando al usuario', arregloErrores[0].constraints)
            response.render(
                'crearEvento',
                {
                    mensaje: arregloErrores

                });

            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            this._eventoService.crear(eventoEventos);
            console.log('variable fecha naciemineto', eventoEventos)
            response.render(
                'crearEvento',
                {
                    mensajeok: eventoEventos

                });
            return eventoEventos;
        }

    }



}

