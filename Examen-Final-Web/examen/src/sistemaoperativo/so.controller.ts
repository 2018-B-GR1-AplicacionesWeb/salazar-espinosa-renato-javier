import { Body, Controller, Get, Param, Post, Query, Res, BadRequestException } from "@nestjs/common";
import { SODto } from "./so.dto";
import { validate } from "class-validator";
import { SOService } from "./so.service";
import { SOEntity } from "./so.entity";
import { FindManyOptions, Like } from "typeorm";

@Controller('sistemaoperativo')
export class SOController {

    constructor(
        private soservice:SOService
    ) {
        
    }
    @Post('ingresoSO')
    async registrarsoController(
        @Body() sistemaoperativo: SODto,
        @Res() response,
    ) {
        console.log('valores que llego al sistema operativo',sistemaoperativo)
        const sistemaoperativonuevo : SODto= new SODto();
        sistemaoperativonuevo.nombre=sistemaoperativo.nombre;
        sistemaoperativonuevo.versionApi = sistemaoperativo.versionApi;
        sistemaoperativonuevo.pesoenGigas = sistemaoperativo.pesoenGigas;
        sistemaoperativonuevo.instalado= sistemaoperativo.instalado;
        sistemaoperativonuevo.fechalanzamiento= new Date(sistemaoperativo.fechalanzamiento);
        
        console.log('valores a ingresa',sistemaoperativonuevo)
        const arregloErrores = await validate(sistemaoperativonuevo)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {
            console.error('errores: creando al usuario', arregloErrores[0].constraints)
            response.render(
                'registroSO',
                {
                    mensaje: arregloErrores
                });
            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            this.soservice.crear(sistemaoperativonuevo);
          
            response.render(
                'registroSO',
                {
                    mensajeok: sistemaoperativonuevo

                });
            return sistemaoperativonuevo;
        }

    }
    @Get('gettablasistemaoperativo')
    async findAllsistemasoperativos(
        @Query('busqueda') busqueda: any,
        @Res() response
        )  : Promise<SOEntity[]> {

        let soArray: SOEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<SOEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    }
                ]
            };

            soArray = await this.soservice.buscar(consulta);

        } else {
            soArray = await this.soservice.buscar();
        }
        response.render(
            'listadosSO',
            {
                arraysistemaoperativo: soArray

            });

        return soArray;
    }
    @Get('eliminarSO')
    async eliminarSO(
        @Query('id') id: number,
        @Res() response
        ): Promise<SOEntity> {
        const SOEncontrado = await this.soservice.buscarPorId(id)
        console.log('valor que llega metodo eliminar usuario ',id)
        console.log('valor de usuario encontrado',SOEncontrado)
        if (SOEncontrado) {
            response.render(
                'listadosSO',
                {
                    mensajeok: SOEncontrado

                });

            return await this.soservice.eliminar(id)
        }
        else {
            response.render(
                'listadosSO',
                {
                    mensajeerror: 'NO ELIMINA POR PROBLEMAS DE DEPENDENCIAS'

                });
            throw new BadRequestException('Aplicacion no existe')
        }
    }

    @Post('actualizarsistemaoperativo')
    async  update(
        @Param() id: number,
        @Body() SO: SOEntity
    ): Promise<SOEntity> {
        const usuarioEncontrado = await this.soservice.findById(id)
        if (usuarioEncontrado) {
           
                return this.soservice.update(id, SO)
       
        }else{
            throw new BadRequestException('Error en actualizacion')
        }

    }



}




