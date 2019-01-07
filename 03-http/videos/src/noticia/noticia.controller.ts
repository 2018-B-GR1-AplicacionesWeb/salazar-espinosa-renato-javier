// noticia.controller.ts

import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {Noticia} from "../app.controller";
import {NoticiaService} from "./noticia.service";

@Controller('noticia')
export class NoticiaController {

constructor (private readonly_noticiaService:NoticiaService){
    
}
    @Get('inicio')
    inicio(
        @Res() response,
        @Query() consulta,
        @Query('accion') accion: string,
        @Query('titulo') titulo: string
    ) {

        let mensaje = undefined;

        if (accion && titulo) {
            switch (accion) {
                case 'borrar':
                    mensaje = `Registro ${titulo} eliminado`;
            }
        }

        response.render(
            'inicio',
            {
                usuario: 'Adrian',
                arreglo: this._noticiaService.arreglo, // AQUI!
                booleano: false,
                mensaje: mensaje
            }
        );
    }

    @Post('eliminar/:idNoticia')
    eliminar(
        @Res() response,
        @Param('idNoticia') idNoticia: string,
    ) {

        const noticiaBorrada = this._noticiaService
            .eliminar(Number(idNoticia));

        const parametrosConsulta = `?accion=borrar&titulo=${
            noticiaBorrada.titulo
            }`;

        response.redirect('/noticia/inicio' + parametrosConsulta)
    }

    @Get('crear-noticia')
    crearNoticiaRuta(
        @Res() response
    ) {
        response.render(
            'crear-noticia'
        )
    }

    @Post('crear-noticia')
    crearNoticiaFuncion(
        @Res() response,
        @Body() noticia: Noticia
    ) {
        this._noticiaService.crear(noticia);

        response.redirect(
            '/inicio'
        )
    }

    @Get('actualizar-noticia/:idNoticia')
    actualizarNoticiaVista(
        @Res() response,
        @Param('idNoticia') idNoticia: string,
    ) {
        // El "+" le transforma en numero a un string
        // numerico
        const noticiaEncontrada = this._noticiaService
            .buscarPorId(+idNoticia);

        response
            .render(
                'crear-noticia',
                {
                    noticia: noticiaEncontrada
                }
            )


    }

    @Post('actualizar-noticia/:idNoticia')
    actualizarNoticiaMetedo(
        @Res() response,
        @Param('idNoticia') idNoticia: string,
        @Body() noticia: Noticia
    ) {
        noticia.id = +idNoticia;
        this._noticiaService.actualizar(+idNoticia, noticia);

        response.redirect('/inicio');

    }
}