import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {NoticiaService} from './noticia.service';

@Module({
    imports: [], //Estos importan Modululos
    controllers: [AppController],//estos importan controladores
    providers: [AppService, NoticiaService],//Estos importan Servicios
})
export class AppModule {
}
