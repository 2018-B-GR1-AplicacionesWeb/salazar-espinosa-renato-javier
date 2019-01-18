//import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import {NoticiaService} from "./noticia/noticia.service";
//import { TypeOrmModule } from '@nestjs/typeorm';
//import {NoticiaEntity} from "./noticia/noticia-entity";
import {NoticiaModule} from "./noticia/noticia.module";
import {PaginaEntity} from "./pagina/pagina.entity";
import {ArticuloEntity} from "./articulo/articulo.entity";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";

import {Module} from '@nestjs/common';
import {TypeModule} from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: 'localhost',
                port: 32769,
                database: 'videos',
                username: 'javier',
                password: 'root',
                synchronize: true,
                dropSchema: false,
                entities: [
                    NoticiaEntity,
                    PaginaEntity,
                    ArticuloEntity,
                    UsuarioEntity,

                ]
            }),
        NoticiaModule,
        UsuarioModule,
    ],  //Van los modulos
    controllers: [
        AppController
    ],  //Van los COntrollers
    providers: [
        AppService
    ],      // Van los Servicios
})



export class AppModule {}