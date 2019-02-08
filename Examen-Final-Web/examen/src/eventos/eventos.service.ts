import {Injectable} from "@nestjs/common";


import {FindManyOptions, Repository, FindOneOptions} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import { RolesporusuarioEntity } from "src/rolesporusuario/rolesporusuario.entity";
import { EventoEntity } from "./eventos.entity";


@Injectable()
export class EventoService {
   
    constructor(
        @InjectRepository(EventoEntity)
        private readonly _eventoRepository: Repository<EventoEntity>,
    
    ) {
    }

    async findAll(consulta: any): Promise<EventoEntity[]> {
        return await this._eventoRepository.find(
                consulta
        )
    }
    crear(eventoparametro: EventoEntity): Promise<EventoEntity> {

        // Metodo Create es como un CONSTRUCTOR de la ENTIDAD
        const eventocreate: EventoEntity = this._eventoRepository
            .create(eventoparametro);

        // Metodo Save Guarda en la BDD
        return this._eventoRepository.save(eventocreate);

    }



}