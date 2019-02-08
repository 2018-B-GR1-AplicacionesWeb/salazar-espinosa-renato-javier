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
 
    buscar(parametrosBusqueda?: FindManyOptions<EventoHijoEntity>): Promise<EventoHijoEntity[]> {
        console.log('valor que llega a servicio',parametrosBusqueda)
        return this._eventohijoRepository.find(parametrosBusqueda);
    }

    async findAll(consulta: any): Promise<EventoHijoEntity[]> {
        console.log('valor que llega a servicio',consulta)
        const consulta2: FindManyOptions<EventoHijoEntity> = {
            where: [
                {
                    eventohijo_id: consulta
                }
            ]
        };
        return await this._eventohijoRepository.find(consulta2)
    }
    crear(eventoparametro: EventoHijoEntity): Promise<EventoHijoEntity> {

        // Metodo Create es como un CONSTRUCTOR de la ENTIDAD
        const eventocreate: EventoHijoEntity = this._eventohijoRepository
            .create(eventoparametro);

        // Metodo Save Guarda en la BDD
        return this._eventohijoRepository.save(eventocreate);

    }


}