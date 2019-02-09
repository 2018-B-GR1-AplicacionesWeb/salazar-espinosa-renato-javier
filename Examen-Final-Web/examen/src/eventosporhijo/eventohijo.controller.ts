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
    ) {
        console.log('evento get evento hijo por id',id)
        this._eventoService.buscar(id).then(
            rest=>{
                console.log('valor resultado promesa rest',rest)
                response.render(
                    'eventoshijocards',
                    {
                        arrayEventoshijo: rest
        
                    });
            },error=>{
                throw error;
            }
        )
        
    }
    // @Get('gettablaEventoshijo')
    // async findAllEvent(
    //     @Query('busqueda') busqueda: number,
    //     @Res() response
    //     )  : Promise<EventoHijoEntity[]> {
    //     console.log('variable de tabla get evento hijo',busqueda)
    //     let eventosArrayhijo: EventoHijoEntity[];
        
    //     if (busqueda) {
    //         const consulta: FindManyOptions<EventoHijoEntity> = {
    //             where: {
    //                 "eventohijo_id": busqueda
    //             },
   
    //         };

    //         eventosArrayhijo = await this._eventoService.buscar(consulta);

    //     } else {
    //         eventosArrayhijo = await this._eventoService.buscar();
    //     }
    //     response.render(
    //         'listadoeventoshijo',
    //         {
    //             arrayEventoshijo: eventosArrayhijo

    //         });
    //         console.log('retorno de busqueda',eventosArrayhijo)
    //     return eventosArrayhijo;
    // }


}

