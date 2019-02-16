import {IsNotEmpty, IsEmail, Matches, IsString, IsNumberString, IsNumber, IsEnum, IsOptional, Length} from 'class-validator'
import { RolEntity } from 'src/rol/rol.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

export class RolesporusuarioDto {
    
    // @IsNumber()
    rolesporusuarioid: number;

    rolforenkey: RolEntity;

    usuarioforenkey: UsuarioEntity;

        
}
