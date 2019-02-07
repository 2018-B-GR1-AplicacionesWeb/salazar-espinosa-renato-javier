import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { RolEntity } from "src/rol/rol.entity";
import { RolesporusuarioEntity } from "src/rolesporusuario/rolesporusuario.entity";
import { AplicacionEntity } from "src/aplicacion/aplication.entity";


@Entity('so')
export class SOEntity {

    @PrimaryGeneratedColumn()
    so_id: number;

    @Column()
    nombre: string;

    @Column()
    versionApi: number;

    @Column()
    fechalanzamiento: Date;

    @Column()
    pesoenGigas: number;

    @Column()
    instalado: boolean;

    @OneToMany(
        type => AplicacionEntity,  
        so => so.aplicacion_id
    )
    so: AplicacionEntity;


}