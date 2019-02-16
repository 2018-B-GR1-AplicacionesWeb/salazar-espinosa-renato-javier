import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { AplicacionEntity } from "src/aplicacion/aplication.entity";


@Entity('evento')
export class EventoEntity {

    @PrimaryGeneratedColumn()
    event_id: number;

    @Column()
    nombre: string;

    @Column()
    fecha: Date;

    @Column()
    latitud: string;

    @Column()
    longitud: string;


    @OneToMany(
        type => AplicacionEntity,  
        so => so.aplicacion_id
    )
    so: AplicacionEntity;


}