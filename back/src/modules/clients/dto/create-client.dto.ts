import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'

export class CreateClientDto {
    @ApiProperty({
        description: "Client name",
        type: String,
        default: "Leonardo Abreu"
    })
    @IsString()
    @IsNotEmpty()
    name: string
    
    @ApiProperty({
        description: "Client e-mail",
        type: String,
        default: "leonardo.abreu.dev@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string
    
    @ApiProperty({
        description: "Client phone",
        type: String,
        default: "12992412575"
    })
    @IsString()
    @IsNotEmpty()
    phone: string
}
