import {Injectable} from "@nestjs/common";


import {FindManyOptions, Repository, FindOneOptions} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import { RolesporusuarioEntity } from "src/rolesporusuario/rolesporusuario.entity";
import { EventoHijoEntity } from "./eventohijo.entity";



@Injectable()
export class EventoHijoService {
   
    constructor(
        @InjectRepository(EventoHijoEntity)
        private readonly _eventohijoRepository: Repository<EventoHijoEntity>,
    
    ) {
    }

    async findAll(consulta: any): Promise<EventoHijoEntity[]> {
        return await this._eventohijoRepository.find(
                consulta
        )
    }
    crear(eventoparametro: EventoHijoEntity): Promise<EventoHijoEntity> {

        // Metodo Create es como un CONSTRUCTOR de la ENTIDAD
        const eventocreate: EventoHijoEntity = this._eventohijoRepository
            .create(eventoparametro);

        // Metodo Save Guarda en la BDD
        return this._eventohijoRepository.save(eventocreate);

    }



}