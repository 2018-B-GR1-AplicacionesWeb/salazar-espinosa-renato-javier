import {Module} from "@nestjs/common";

import {TypeOrmModule} from '@nestjs/typeorm';
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { RolesporusuarioService } from "src/rolesporusuario/rolesporusuario.service";
import { RolesporusuarioEntity } from "src/rolesporusuario/rolesporusuario.entity";
import { RolEntity } from "src/rol/rol.entity";
import { RolService } from "src/rol/rol.service";

@Module(
    {
        imports: [
            TypeOrmModule
                .forFeature(
                    [
                        UsuarioEntity
                        ,RolesporusuarioEntity,
                        RolEntity
                    ])
        ],
        controllers: [
            UsuarioController
        ],
        providers: [
            UsuarioService,
            RolesporusuarioService,
            RolService
        ],
        exports: [
          
        ]
    }
)
export class UsuarioModule {

}







