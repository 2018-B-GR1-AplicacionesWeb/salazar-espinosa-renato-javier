import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { SOEntity } from "src/sistemaoperativo/so.entity";
import { EventoHijoEntity } from "src/eventosporhijo/eventohijo.entity";



@Entity('aplicacion')
export class AplicacionEntity {

    @PrimaryGeneratedColumn()
    aplicacion_id: number;

    @Column()
    pesoenGigas: number;

    @Column()
    version: number;

    @Column()
    nombre: string;

    @Column()
    urldescarga: string;

    @Column()
    fechalanzamiento: Date;

    @Column()
    costo: number;

    @ManyToOne(
        type => SOEntity,
        aplicacion => aplicacion.so_id
    )
    so_id: SOEntity;

    @ManyToOne(
        type => EventoHijoEntity,
        eventohijo => eventohijo.eventohijo_id
    )
    eventhijo_id: EventoHijoEntity;



}