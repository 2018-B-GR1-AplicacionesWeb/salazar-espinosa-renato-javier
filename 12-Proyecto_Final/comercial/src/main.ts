import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

//import * as httpserve from 'http-server';

//console.log(httpserve);

import * as cookieParser from 'cookie-parser';
import * as ejs from 'ejs';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser('me gusta el yahuarlocro',//secreto
        {
        //opciones
    }));
    app.set('view engine','ejs');//renderizar
    await app.listen(3000);
}

bootstrap();
