import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, MinLength  } from "class-validator"

export class CreateContactDto {
    @ApiProperty({
        description: "Contact name",
        type: String,
        default: "Leonardo Abreu"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string

    @ApiProperty({
        description: "Contact email",
        type: String,
        default: "leonardo.abreu.dev@gmail.com"
    })
    @IsEmail()
    @IsNotEmpty()
    email: string
    
    @ApiProperty({
        description: "Contact phone",
        type: String,
        default: "12992412575"
    })
    @IsString()
    @IsNotEmpty()
    phone: string
}
