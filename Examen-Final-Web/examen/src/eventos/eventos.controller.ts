import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { FindManyOptions, Like } from "typeorm";
import { EventoService } from "./eventos.service";
import { EventoEntity } from "./eventos.entity";


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


}

