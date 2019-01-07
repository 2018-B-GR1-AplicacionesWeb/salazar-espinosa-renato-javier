// BDD Ya existe -> synchronize:false
// BDD No existe -> synchronize:true

import {Column, Entity, PrimaryGeneratedColumn,Index} from "typeorm";


@Entity('noticia')
export class NoticiaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column({
        name: 'titulo_noticia',
        type: 'varchar',
        length: 50
    })
    titulo:String;

    @Column({
        name: 'descripcion_noticia',
        type: 'text',
        nullable: true
    })
    descripcion:String;

}