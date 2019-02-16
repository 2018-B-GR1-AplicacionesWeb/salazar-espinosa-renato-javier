import {Module} from "@nestjs/common";

import {TypeOrmModule} from '@nestjs/typeorm';
import { EventoController } from "./eventos.controller";
import { EventoService } from "./eventos.service";
import { EventoEntity } from "./eventos.entity";



@Module(
    {
        imports: [
            TypeOrmModule
                .forFeature(
                    [
                        EventoEntity
                    ])
        ],
        controllers: [
            EventoController
        ],
        providers: [
            EventoService
        ],
        exports: [
          
        ]
    }
)
export class EventoModule {

}







