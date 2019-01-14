import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * FileSession from 'session-file-strore';

const  FileStore= FileSession(session);
// const http_server = require('http-server'); //  forma de importr en JS
import * as cookieParser from 'cookie-parser';
import * as ejs from 'ejs';
import  * as session from 'expres-session';

import {npm} from 'http-server';
import {from} from "rxjs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(
        session (){

        secret:'no hay ',
            resave: false;
        saveUninialized: true;
        cookie:{secure: false},
        name:'server-session',
        storre: new FileStore()
    }
    );

    app.use(cookieParser(
        'me gustan los tacos', // secreto
        {  // opciones

        }
    ));
    app.set('view engine', 'ejs');

    await app.listen(3000);
}

bootstrap();