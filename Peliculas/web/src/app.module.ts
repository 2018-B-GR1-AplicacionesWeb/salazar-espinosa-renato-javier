import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [

      TypeOrmModule.forRoot(
          {

              type:'mysql',
              //host: '172.29.65.12',
              // port: 32769,
              host:'localhost',
              port:3306,
              database: 'peliculas',
              username: 'root',
              password: 'javier',
              synchronize: true,
              dropSchema: false,
              entities:[


              ]

          }
      ),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
