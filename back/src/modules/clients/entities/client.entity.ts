import { Exclude } from 'class-transformer'

export class Client {
    readonly id: number
    readonly created_at: Date
    name: string
    email: string
    phone: string

    @Exclude()
    password: string
}