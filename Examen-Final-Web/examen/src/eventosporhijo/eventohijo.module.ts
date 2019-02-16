import {Module} from "@nestjs/common";

import {TypeOrmModule} from '@nestjs/typeorm';
import { EventoHijoEntity } from "./eventohijo.entity";
import { EventoHijoController } from "./eventohijo.controller";
import { EventoHijoService } from "./eventohijo.service";
import { AplicacionEntity } from "src/aplicacion/aplication.entity";
import { EventoEntity } from "src/eventos/eventos.entity";
import { AplicacionService } from "src/aplicacion/aplication.service";
import { EventoService } from "src/eventos/eventos.service";


@Module(
    {
        imports: [
            TypeOrmModule
                .forFeature(
                    [
                        EventoHijoEntity,
                        AplicacionEntity,
                        EventoEntity
                    ])
        ],
        controllers: [
            EventoHijoController
        ],
        providers: [
            EventoHijoService,
            AplicacionService,
            EventoService
        ],
        exports: [
          
        ]
    }
)
export class EventoHijoModule {

}




