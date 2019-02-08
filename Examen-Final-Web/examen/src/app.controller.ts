import { Controller, Get, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('inicio')
  LlamarVistaInicio( 
    @Res() res
    )
  {
    res.render('inicio');
  }
  @Get('login')
  LlamarVistaLogin( 
    @Res() res
    )
  {
    res.render('login');
  }
  @Get('register')
  LlamarVistaRegistro( 
    @Res() res
    )
  {
    res.render('register');
  }
  @Get('addroles')
  LlamarVistao( 
    @Res() res
    )
  {
    res.render('addroles');
  }
  @Get('tablausuariosconrol')
  LlamarVistatablausuariosconrol( 
    @Res() res
    )
  {
    res.render('tablausuariosconrol');
  }
  @Get('tablaeventos')
  LlamarVistatablaeventos( 
    @Res() res
    )
  {
    res.render('tablaeventos');
  }
  @Get('registroSO')
  LlamarVistaRegistrarSO( 
    @Res() res
    )
  {
    res.render('registroSO');
  }
  @Get('registroAplicacion')
  LlamarVistaRegistraAplicacion( 
    @Res() res
    )
  {
    res.render('registroAplicacion');
  }
  @Get('llamartablaeventos')
  LlamarTablaEventos( 
    @Res() res
    )
  {
    res.render('tablaeventos');
  }
  @Get('llamareventos')
  LlamarTablaEventosHijo( 
    @Res() res
    )
  {
    res.render('listadosSO');
  }
  @Get('llamartablaaplicacion')
  llamartablaaplicacion( 
    @Res() res
    )
  {
    res.render('listadoAplicacion');
  }
  @Get('llamareventohijocard')
  llamareventohijocard( 
    @Res() res
    )
  {
    res.render('eventoshijocards');
  }

  @Get('llamarlistadoeventoshijo')
  llamarlistadoeventohijo( 
    @Res() res
    )
  {
    res.render('listadoeventoshijo');
  }

  @Get('registroevento')
  registrarevento( 
    @Res() res
    )
  {
    res.render('crearEvento');
  }
  @Get('actualizarSO')
  actualizarso( 
    @Query('id') id: any,
    @Query('nombre') nombre: any,
    @Query('versionApi') versionApi: any,
    @Query('fechalanzamiento') fechalanzamiento: any,
    @Query('pesoenGigas') pesoenGigas: any,
    @Query('instalado') instalado: any,
    @Res() res
    )
  {
    console.log()
    res.render(
      'actualizarSO',
      {
        id:id,
        nombre:nombre,
        versionApi:versionApi,
        fechalanzamiento: fechalanzamiento,
        pesoenGigas:pesoenGigas,
        instalado:instalado

      });
  }



 
}
