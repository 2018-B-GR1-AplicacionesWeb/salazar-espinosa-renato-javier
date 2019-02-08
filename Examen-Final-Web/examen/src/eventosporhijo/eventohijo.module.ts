import {Module} from "@nestjs/common";

import {TypeOrmModule} from '@nestjs/typeorm';
import { EventoHijoEntity } from "./eventohijo.entity";
import { EventoHijoController } from "./eventohijo.controller";
import { EventoHijoService } from "./eventohijo.service";


@Module(
    {
        imports: [
            TypeOrmModule
                .forFeature(
                    [
                        EventoHijoEntity
                    ])
        ],
        controllers: [
            EventoHijoController
        ],
        providers: [
            EventoHijoService
        ],
        exports: [
          
        ]
    }
)
export class EventoHijoModule {

}




