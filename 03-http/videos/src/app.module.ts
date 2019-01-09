import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NoticiaService} from "./noticia/noticia.service";

import {TypeOrmModule} from '@nestjs/typeorm';
import {NoticiaEntity} from "./noticia/noticia-entity";
import {PaginaEntity} from "./pagina/pagina.entity";
import {ArticuloEntity} from "./articulo/articulo.entity";
import {NoticiaModule} from "./noticia/noticia.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host:'localhost',
                port: 32769,
                database: 'videos',
                username: 'javier',
                password: 'root',
                synchronize: true,
                dropSchema:false,
                entities: [
                    NoticiaEntity,
                    PaginaEntity,
                    ArticuloEntity
                ]
            }
        ),
        NoticiaModule  //falta de importar este modulo
    ],  // MODULOS
    controllers: [AppController],  // Controllers
    providers: [
        AppService
    ], // Servicios
})
export class AppModule {
}

