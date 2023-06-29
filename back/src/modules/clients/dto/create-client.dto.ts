import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
import { ApiProperty } from '@nestjs/swagger'
import { Transform } from "class-transformer"
import { hashSync } from "bcryptjs"

export class CreateClientDto {
    @ApiProperty({
        description: "Client name",
        type: String,
        default: "Leonardo Abreu"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
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
        default: 12992412575
    })
    @IsString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        description: "Client password",
        type: String,
        default: "123456"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ['transform'],
    })
    password: string
}
