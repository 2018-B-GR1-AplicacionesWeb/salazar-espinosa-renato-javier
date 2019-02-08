import { Body, Controller, Get, Param, Post, Query, Res, BadRequestException, Delete } from "@nestjs/common";
import { FindManyOptions, Like } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
import { validate } from "class-validator";
import { UsuarioDto } from "./usuario.dto";
import { RolesporusuarioService } from "src/rolesporusuario/rolesporusuario.service";
import { RolService } from "src/rol/rol.service";
import {Md5} from 'ts-md5/dist/md5';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private userservice: UsuarioService,
        private rolesporusuarioservice: RolesporusuarioService,
        private rolservice: RolService

    ) {

    }
    @Post('ingresarusuario')
    async registrarusuarioController(
        @Body() usuario: UsuarioEntity,
        @Res() response,
    ) {
        console.log('valor nombre', usuario)

        const usuarionuevo = new UsuarioDto();
        usuarionuevo.usuario_id = usuario.usuario_id;
        usuarionuevo.password = usuario.password;
        usuarionuevo.nombre = usuario.nombre;
        usuarionuevo.fecha_nacimiento = new Date(usuario.fecha_nacimiento);
        usuarionuevo.correo = usuario.correo;
        const arregloErrores = await validate(usuarionuevo)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if (existenErrores) {
            console.error('errores: creando al usuario', arregloErrores[0].constraints)
            response.render(
                'register',
                {
                    mensaje: arregloErrores

                });

            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            //const md5 = new Md5();
            var CryptoJS = require("crypto-js");
           // const encriptar = md5.appendStr(usuarionuevo.password).end();

            const  ciphertext = CryptoJS.AES.encrypt(JSON.stringify(usuarionuevo.password), 'secret key 123');


           // const ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
           // console.log('valor encriptacion',encriptar)
            usuarionuevo.password=ciphertext.toString();

            const bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            console.log("descencriptar",decryptedData);

            this.userservice.crear(usuarionuevo);
            response.render(
                'register',
                {
                    mensajeok: usuarionuevo

                });
            return usuarionuevo;
        }

    }
    @Post('login')
    async autentificarController(
        @Body('correo') correo: string,
        @Body('password') password: string,
        @Res() response
    ): Promise<UsuarioEntity> {
        let CryptoJS = require("crypto-js");
        console.log('valor de correo', correo)
        console.log('valor de pasword', password)
        const  ciphertext = CryptoJS.AES.encrypt(JSON.stringify(password), 'secret key 123');
        console.log('valor encriptado',ciphertext.toString())
        const usuarioEncontrado = await this.userservice.autenticar(correo,null);
        console.log('usuario encontrado ',usuarioEncontrado)
       
        const bytes  = CryptoJS.AES.decrypt(usuarioEncontrado.password,'secret key 123');
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        usuarioEncontrado.password=decryptedData;
        if (usuarioEncontrado) {
            const esPasswordCorrecto = usuarioEncontrado.password == password
            if (esPasswordCorrecto) {
                this.rolesporusuarioservice.buscarRolesporusuario(usuarioEncontrado.usuario_id).then(
                    rest => {
                        console.log('valores de buscarRolesporusuario', rest);
                        this.rolservice.findAll(null).then(
                            restroles => {
                                console.log('valor de respuesta combo', restroles)
                                // response.render(
                                //     'addroles',
                                //     {
                                //         arregloroles: restroles

                                //     });


                            }
                        );

                    }, error => {
                        throw error;
                    }
                );

                response.render(
                    'addroles',
                    {
                        usuarioemitter: usuarioEncontrado

                    });

                return usuarioEncontrado;
            }
            else {
                console.error('intento fallido:  paassword incorrecto', password)
                response.render(
                    'login',
                    {
                        mensajeerror: 'intento fallido:  paassword incorrecto', password

                    });
                throw new BadRequestException('error loguin')
            }
        }
        else {
            console.error('intento fallido:  no existe usuario', correo)
            response.render(
                'login',
                {
                    mensajeerror: 'intento fallido:  no existe usuario', correo

                });

            throw new BadRequestException('error loguin')
        }


    }
    @Get('gettablausuarios')
    async findAllusuarios(
        @Query('busqueda') busqueda: any,
        @Res() response
        )  : Promise<UsuarioEntity[]> {

        let usuariosArray: UsuarioEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<UsuarioEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    },
                    {
                        correo: Like(`%${busqueda}%`)
                    }
                ]
            };

            usuariosArray = await this.userservice.buscar(consulta);

        } else {
            usuariosArray = await this.userservice.buscar();
        }
        response.render(
            'tablausuariosconrol',
            {
                arrayusuarios: usuariosArray

            });

        return usuariosArray;
    }
    @Get('eliminarusuario')
    async eliminarusuario(
        @Query('id') id: number,
        @Res() response
        ): Promise<UsuarioEntity> {
        const usuarioEncontrado = await this.userservice.buscarPorId(id)
        console.log('valor que llega metodo eliminar usuario ',id)
        console.log('valor de usuario encontrado',usuarioEncontrado)
        if (usuarioEncontrado) {
            response.render(
                'register',
                {
                    mensajeok: usuarioEncontrado

                });

            return await this.userservice.eliminar(id)
        }
        else {
            response.render(
                'login',
                {
                    mensajeerror: 'NO ELIMINA POR PROBLEMAS DE DEPENDENCIAS'

                });
            throw new BadRequestException('Usuario no existe')
        }
    }
}



