import { IsEmail, IsNotEmpty, IsString, IsNumber  } from "class-validator"

export class CreateContactDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    phone: string

    @IsNumber()
    @IsNotEmpty()
    client_id?: number
}
