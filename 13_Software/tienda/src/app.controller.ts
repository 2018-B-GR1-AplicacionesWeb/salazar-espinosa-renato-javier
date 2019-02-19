import {Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {response} from "express";
//import {Noticia} from "../../../11-Proyecto/03-http/videos/src/app.controller";

import {NoticiaService} from "./noticia/noticia.service";

@Controller()
export class AppController {


    arreglo:Noticia[]= [
        {
            id: 1,
            titulo: 'A compras',
            descripcion: 'descripcion de a'
        },
        {
            id: 2,
            titulo: 'B ventas',
            descripcion: 'descripcion de b'
        },
        {
            id: 3,
            titulo: 'C reservas',
            descripcion: 'descripcion de c'
        },
        {
            id: 4,
            titulo: 'informacion dashboar',
            descripcion: 'descripcion de d'
        }
    ];
    numeroRegistro = 5;


    constructor(private readonly appService: AppService) {
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
                arreglo: this.arreglo,
                booleano: true,
            }
        );
    }

    @Get('inicio')
    inicio(@Res()response,) {
        response.render(
            'inicio',//pagina a renderizar
            {//Variables uqe van dentor de la pagina '/inicio'
                usuario: 'Javier',
                arreglo: this.arreglo, //usamos el método arreglo linea 11
                booleano: false,
            }
        );

    }

    @Post('eliminar/:idNoticia')//El parámetro de ruta se define con DOS PUNTOS “:”
    eliminar(
        @Res()response,
        @Param('idNoticia') idNoticia: string,//nuetro parametro de ruta se llama idNoticia
    ) {//PARA BORRAR necesitamos el indice //para buscar el indice findIndex
        const indiceNoticia = this.arreglo.findIndex(
            (noticia) => {
                return noticia.id === Number(idNoticia)
            })//el string lo paso a number
        this.arreglo.splice(indiceNoticia, 1);//para eliminar splice una funcion

        response.redirect('/inicio')
    }

    @Get('crear-noticia')
    crearNoticia(@Res() response,) {
        response.render('crear-noticia')
    }


    @Post('crear-noticia')
    crearNoticiaFuncion(
        @Res() response,
        @Body() noticia:Noticia)
    {
       noticia.id=this.numeroRegistro;
       
        this.numeroRegistro++;
        this.arreglo.push(noticia);
        response.redirect('/inicio')

    }


}

export interface Usuario {
    nombre: string;
}

export interface Noticia {
    id?: number;
    titulo: string;
    descripcion: string;

}