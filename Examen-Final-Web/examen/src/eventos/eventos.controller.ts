import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { FindManyOptions, Like } from "typeorm";
import { EventoService } from "./eventos.service";


@Controller('evento')
export class EventoController {

    constructor(
        private readonly _eventoService:EventoService ) {

    }


}

