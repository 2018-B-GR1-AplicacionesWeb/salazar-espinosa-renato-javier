import {IsNotEmpty, IsEmail, Matches, IsString, IsNumberString, IsNumber, IsEnum, IsOptional, Length} from 'class-validator'

export class EventosDto {
    
    
   

    event_id: number;

    @IsNotEmpty()
    @IsString()    
    nombre: string;

    @IsNotEmpty()
    @IsString()    
    fecha: Date;

    @IsNotEmpty()
    @IsString()    
    latitud: string;

    @IsNotEmpty()
    @IsString()
    longitud: string;






    
}
