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
 
    async buscar(parametrosBusqueda: number): Promise<EventoHijoEntity[]> {
        
        const consultaevento: FindOneOptions<EventoHijoEntity> = {
            where: {
                eventforenkey: parametrosBusqueda
            },
            relations:['aplicacionforenkey']
        };
        const respuesta = await this._eventohijoRepository.find(consultaevento);
       
        return respuesta;
    
    }
    buscarall(parametrosBusqueda?: FindManyOptions<EventoHijoEntity>): Promise<EventoHijoEntity[]> {
        return this._eventohijoRepository.find(parametrosBusqueda);
    }

    async findAll(consulta: number): Promise<EventoHijoEntity[]> {
        console.log('valor que llega a servicio',consulta)
        const consulta2: FindManyOptions<EventoHijoEntity> = {
            where: {
                eventforenkey: consulta
            },
            relations:['aplicacionforenkey']
        };
        const respuesta = await this._eventohijoRepository.find(consulta2);
       
        return respuesta;
    }
    crear(eventoparametro: EventoHijoEntity): Promise<EventoHijoEntity> {

        // Metodo Create es como un CONSTRUCTOR de la ENTIDAD
        const eventocreate: EventoHijoEntity = this._eventohijoRepository
            .create(eventoparametro);

        // Metodo Save Guarda en la BDD
        return this._eventohijoRepository.save(eventocreate);

    }


}