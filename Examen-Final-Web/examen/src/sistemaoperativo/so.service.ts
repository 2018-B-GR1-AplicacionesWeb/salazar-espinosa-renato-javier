import {Injectable} from "@nestjs/common";


import {FindManyOptions, Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';
import { SOEntity } from "./so.entity";
import { SODto } from "./so.dto";


@Injectable()
export class SOService {
   
    constructor(
        @InjectRepository(SOEntity)
        private readonly _SORepository: Repository<SOEntity>,
    ) {
    }
    crear(sonuevo: SODto): Promise<SOEntity> {

        // Metodo Create es como un CONSTRUCTOR de la ENTIDAD
        const socreate: SOEntity = this._SORepository
            .create(sonuevo);

        // Metodo Save Guarda en la BDD
        return this._SORepository.save(socreate);

    }
    buscar(parametrosBusqueda?: FindManyOptions<SOEntity>): Promise<SOEntity[]> {
        return this._SORepository.find(parametrosBusqueda);
    }
    buscarPorId(usurioid: number): Promise<SOEntity> {
        return this._SORepository.findOne(usurioid);
    }

    eliminar(SO_iddelete: number): Promise<SOEntity> {

        const usuarioEliminar: SOEntity = this._SORepository
            .create({
                so_id: SO_iddelete
            });

        return this._SORepository.remove(usuarioEliminar);
    }


}