import {Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {response} from "express";
//import {Noticia} from "../../../11-Proyecto/03-http/videos/src/app.controller";

import {NoticiaService} from "./noticia.service";


@Controller()
export class AppController {

    constructor(private readonly appService: AppService,
                private readonly _noticiaService: NoticiaService) {//para usar el servicio en el controlador

    }

    @Get('pagina')
    pagina(@Res()response,) {
        response.render('pagina',
            {
                administador: 'Cesar'
            })

    }

    @Get('adiosMundo')//url
    adiosMundo(): string {
        return 'adios mundo get niko';
    }

    @Post('adiosMundo')//url
    adiosMundoPost(@Res()response,) {
        response.render(
            'inicio',//pagina a renderizar
            {//Variables uqe van dentor de la pagina '/inicio'
                usuario: 'Javier',
                arreglo: this._noticiaService.arreglo,
                booleano: true,
            }
        );
    }

    @Get('inicio')
    inicio(@Res()response,) {
        response.render(
            'inicio',//pagina a renderizar
            {//Variables que van dentor de la pagina '/inicio'
                usuario: 'Javier',
                arreglo: this._noticiaService.arreglo, //usamos el método arreglo linea 11
                booleano: false,
            }
        );

    }

    @Post('eliminar/:idNoticia')//El parámetro de ruta se define con DOS PUNTOS “:”
    eliminar(
        @Res()response,
        @Param('idNoticia') idNoticia: string,//nuetro parametro de ruta se llama idNoticia
    ) {//PARA BORRAR necesitamos el indice //para buscar el indice findIndex

        this._noticiaService.eliminar(Number(idNoticia));
        /*

                const indiceNoticia = this._noticiaService.arreglo.findIndex(
                    (noticia) => {
                        return noticia.id === Number(idNoticia)
                    })//el string lo paso a number
                this._noticiaService.arreglo.splice(indiceNoticia, 1);//para eliminar splice una funcion
        */

        response.redirect('/inicio')
    }

    @Get('crear-noticia')
    crearNoticia(@Res() response,
    ) {
        response.render('crear-noticia')
    }


    @Post('crear-noticia')
    crearNoticiaFuncion(
        @Res() response,
        @Body() noticia: Noticia
    ) {

        this._noticiaService.crear(noticia), //tenemos que mandar la noticia
            /*noticia.id = this._noticiaService.numeroRegistro;
            this._noticiaService.numeroRegistro++;
            this._noticiaService.arreglo.push(noticia);//aumentamos al arreglo la noticia ingresada*/
            response.redirect('/inicio');//relanzamos la actualizacion al inicio

    }


}

export interface Usuario {
    nombre: string;
}

export interface Noticia {
    id?: number;
    titulo: string;
    descripcion: string;
    /* id: 1,
     titulo: 'A compras',
     descripcion: 'descripcion de a'*/

}