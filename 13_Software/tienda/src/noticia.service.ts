import {Injectable} from "@nestjs/common";
import {Noticia} from "./app.controller";

@Injectable()
export class NoticiaService {//AppService
    arreglo: Noticia[] = [
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

    numeroRegistro = 5

    //Métodos

    crear(noticia: Noticia): Noticia {//que deberia de recibir: pues una noticia:Noticia
        noticia.id= this.numeroRegistro;
        this.numeroRegistro++;
        this.arreglo.push(noticia);//agragamos la noticia
        return noticia;
    }

    eliminar(idNoticia: number): Noticia{ //que ribimos: el id de la Noticia de tipo  number
        const indiceNoticia = this.arreglo.findIndex(
            (noticia) => {
                return noticia.id === (idNoticia)
            }
        );//el string lo paso a number

       const registroEliminado=JSON.parse(JSON.stringify(this.arreglo[indiceNoticia]));
        this.arreglo.splice(indiceNoticia, 1);//para eliminar splice una funcion
        return registroEliminado;

    }

    actualizar(idNoticia: number, nuevaNoticia: Noticia):Noticia {
        const indiceNoticia = this.arreglo.findIndex(
            (noticia) => {
                return noticia.id === (idNoticia)
            }
        );
        this.arreglo[indiceNoticia] = nuevaNoticia;//nuevaNoticia.titulo;//para actulaizar
       // this.arreglo[indiceNoticia].descripcion = nuevaNoticia.descripcion;
        return this.arreglo[indiceNoticia];

    }


}