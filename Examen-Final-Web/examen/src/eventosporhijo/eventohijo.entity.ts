import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { AplicacionEntity } from "src/aplicacion/aplication.entity";
import { EventoEntity } from "src/eventos/eventos.entity";



@Entity('eventohijo')
export class EventoHijoEntity {

    @PrimaryGeneratedColumn()
    eventohijo_id: number;

    @ManyToOne(
        type => EventoEntity,
        pagina => pagina.event_id
    )
    eventforenkey: EventoEntity;
    @ManyToOne(
        type => AplicacionEntity,
        pagina => pagina.aplicacion_id
    )
    aplicacionforenkey: AplicacionEntity;


}