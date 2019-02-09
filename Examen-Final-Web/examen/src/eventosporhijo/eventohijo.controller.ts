import { Body, Controller, Get, Param, Post, Query, Res, BadRequestException } from "@nestjs/common";
import { EventoHijoService } from "./eventohijo.service";
import { EventoHijoEntity } from "./eventohijo.entity";
import { FindManyOptions, Like } from "typeorm";
import { validate } from "class-validator";
import { AplicacionService } from "src/aplicacion/aplication.service";
import { EventoService } from "src/eventos/eventos.service";



@Controller('eventosporhijo')
export class EventoHijoController {

    constructor(
        private readonly _eventohijoService: EventoHijoService,
        private aplicacionservicio:AplicacionService,
        private eventoservicio:EventoService) {

    }

    @Post('ingresaEventohijo')
    async ingresareventohijocontroller(
        @Body() eventohijo: EventoHijoEntity,
        @Res() response,
    ) {
        console.log('valores que llego a rol por usuario controller', eventohijo)
        const eventohijonuevo = new EventoHijoEntity();
        eventohijonuevo.eventforenkey = eventohijo.eventforenkey;
        eventohijonuevo.aplicacionforenkey = eventohijo.aplicacionforenkey;

        const arregloErrores = await validate(eventohijonuevo)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {

            console.error('errores: creando al usuario', arregloErrores[0].constraints)
            response.render(
                'creareventoshijo',
                {
                    mensaje: arregloErrores

                });

            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            this._eventohijoService.crear(eventohijonuevo);
            response.render(
                'creareventoshijo',
                {
                    mensajeok: eventohijonuevo

                });
            console.log('ID DE VARIABLE ROL POR USER', eventohijonuevo)

            return eventohijonuevo;
        }

    }
    @Get('registroeventohijo')
    registroeventohijo(
        @Res() res
    ) {
        this.eventoservicio.buscar().then(
            rest=>{
               console.log('valores de rest',rest);
              this.aplicacionservicio.buscar().then(
                  restapli=>{
                    res.render(
                        'creareventoshijo',
                        {
                            arregloeventos: rest,
                            arregloaplicacion:restapli
            
                        });
                        console.log('rest aplciacion',restapli)
                  }
              );
                
            },error=>{

            }
        );
        
      

      
    }

    @Get('geteventbyid')
    async findOne(
        @Query('id') id,
        @Res() response
    ) {
        console.log('evento get evento hijo por id', id)
        this._eventohijoService.buscar(id).then(
            rest => {
                console.log('valor resultado promesa rest', rest)
                response.render(
                    'eventoshijocards',
                    {
                        arrayEventoshijo: rest

                    });
            }, error => {
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

