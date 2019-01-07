import Module = NodeJS.Module;
import {MonoTypeOperatorFunction} from "rxjs";
import {Noticia} from "../app.controller";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module(

    {
        imports:[

            TypeOrmModule.forFeature(

                :[ NoticiaEntity]
            )
        ],

        controllers:[

                NoticiaControler
        ],
        providers:[
            NoticiaService

        ],//Servicios
        exports:[

            NoticiaService
        ]

    }
)
export class NoticiaModule{

}
//noticia
//noticiaService