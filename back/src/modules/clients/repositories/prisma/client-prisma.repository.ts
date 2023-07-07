import { Injectable } from "@nestjs/common" 
import { ClientsRepository } from "../clients.repository" 
import { PrismaService } from "src/database/prisma.service" 
import { CreateClientDto } from "../../dto/create-client.dto" 
import { Client } from "../../entities/client.entity" 
import { UpdateClientDto } from "../../dto/update-client.dto" 
import { plainToInstance } from "class-transformer" 

@Injectable()
export class ClientsPrismaRepository implements ClientsRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateClientDto): Promise<Client> {
        const client = new Client()
        Object.assign(client, {
            ...data
        })
        const newClient = await this.prisma.client.create({
            data: { 
                ...client
            }
        })
        return plainToInstance(Client, newClient)
    }
    async findAll(): Promise<Client[]> {
        const clients = await this.prisma.client.findMany()
        return clients
    }
    async findOne(id: number): Promise<Client> {
        const client = await this.prisma.client.findUnique({
            where: { id }
        })
        return plainToInstance(Client, client)
    }
    async findByEmail(email: string): Promise<Client> {
        const client = await this.prisma.client.findUnique({
          where: { email },
        }) 
        return client
    }
    async update(id: number, data: UpdateClientDto): Promise<Client> {
        const client = await this.prisma.client.update({
            where: { id },
            data: { ...data }
        })
        return plainToInstance(Client, client)
    }
    async delete(id: number): Promise<void> {
        await this.prisma.client.delete({
            where: { id }
        })
    }
}