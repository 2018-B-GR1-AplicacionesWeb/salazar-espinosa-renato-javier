import { Body, Controller, Get, Param, Post, Query, Res, BadRequestException } from "@nestjs/common";
import { EventoHijoService } from "./eventohijo.service";
import { EventoHijoEntity } from "./eventohijo.entity";
import { FindManyOptions, Like } from "typeorm";



@Controller('eventosporhijo')
export class EventoHijoController {

    constructor(
        private readonly _eventoService:EventoHijoService ) {

    }
    @Get('geteventbyid')
    async findOne(
        @Query('id') id,
        @Res() response
    ): Promise<EventoHijoEntity[]> {
        const consultaevento: FindManyOptions<EventoHijoEntity> = {
            where: [
                {
                    eventohijo_id: id
                }
            ]
        };
        const eventoshijosarray = await this._eventoService.buscar(consultaevento)
        console.log('valores de eventos',eventoshijosarray)
        if (eventoshijosarray) {

            response.render(
                'eventoshijocards',
                {
                    arrayEventoshijo: eventoshijosarray
    
                });
            return eventoshijosarray;
        }
        else {
            response.render(
                'eventoshijocards',
                {
                    mensajeerror: "Evento hijo no existe"
    
                });
            throw new BadRequestException('Eventos hijo no existe')
        }
    }
    @Get('gettablaEventoshijo')
    async findAllEvent(
        @Query('busqueda') busqueda: number,
        @Res() response
        )  : Promise<EventoHijoEntity[]> {
          
        let eventosArrayhijo: EventoHijoEntity[];
        
        if (busqueda) {
            const consulta: FindManyOptions<EventoHijoEntity> = {
                where: {
                    "eventohijo_id": busqueda
                },
   
            };

            eventosArrayhijo = await this._eventoService.buscar(consulta);

        } else {
            eventosArrayhijo = await this._eventoService.buscar();
        }
        response.render(
            'listadoeventoshijo',
            {
                arrayEventoshijo: eventosArrayhijo

            });
            console.log('retorno de busqueda',eventosArrayhijo)
        return eventosArrayhijo;
    }


}

