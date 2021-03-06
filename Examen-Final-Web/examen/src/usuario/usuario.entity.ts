import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { RolesporusuarioEntity } from "src/rolesporusuario/rolesporusuario.entity";


@Entity('usuario')
export class UsuarioEntity {

   
   
    @PrimaryGeneratedColumn()
    usuario_id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    password: string;

    @Column()
    fecha_nacimiento: Date;

    @OneToMany(
        type => RolesporusuarioEntity,  
        pagina => pagina.rolforenkey
    )
    paginas: RolesporusuarioEntity[];


}