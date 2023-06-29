import { Client } from "../entities/client.entity" 
import { CreateClientDto } from "../dto/create-client.dto" 
import { UpdateClientDto } from "../dto/update-client.dto" 

export abstract class ClientsRepository {
    abstract create(data: CreateClientDto): Promise<Client>
    abstract findAll(): Promise<Client[]>
    abstract findOne(id: number): Promise<Client> | Client
    abstract findByEmail(email: string): Promise<Client> | Client
    abstract update(id: number, data: UpdateClientDto): Promise<Client>
    abstract delete(id: number): Promise<void>
}