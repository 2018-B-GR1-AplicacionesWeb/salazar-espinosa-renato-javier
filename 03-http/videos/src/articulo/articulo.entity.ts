import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PaginaEntity} from "../pagina/pagina.entity";


@Entity()
export  class ArticuloEntity {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    texto:string;

    //es el hijo por lo tanto Manytoone
    @ManyToOne(

        type =>  PaginaEntity,
        pagina=>pagina.articulos

    )
    pagina:PaginaEntity;

}