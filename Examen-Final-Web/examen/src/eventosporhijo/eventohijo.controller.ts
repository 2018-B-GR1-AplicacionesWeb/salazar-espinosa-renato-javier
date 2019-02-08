import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { EventoHijoService } from "./eventohijo.service";



@Controller('eventohijo')
export class EventoHijoController {

    constructor(
        private readonly _eventoService:EventoHijoService ) {

    }


}

