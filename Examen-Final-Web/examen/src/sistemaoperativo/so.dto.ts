import { IsNotEmpty, IsEmail, Matches, IsString, IsNumberString, IsNumber, IsEnum, IsOptional, Length } from 'class-validator'

export class SODto {


    so_id: number;


    // @IsNotEmpty()
    // @IsString()
    nombre: string;

    // @IsNotEmpty()
    // @IsNumber()
    versionApi: number;

    // @IsNotEmpty()
    fechalanzamiento: Date;

    // @IsNumber()
    pesoenGigas: number


    // @IsNotEmpty()
    instalado: boolean;


}
