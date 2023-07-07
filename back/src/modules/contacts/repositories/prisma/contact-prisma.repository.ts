import { Injectable } from "@nestjs/common" 
import { PrismaService } from "src/database/prisma.service" 
import { ContactsRepository } from "../contacts.repository" 
import { CreateContactDto } from "../../dto/create-contact.dto" 
import { Contact } from "../../entities/contact.entity" 
import { UpdateContactDto } from "../../dto/update-contact.dto" 

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateContactDto, clientId: number): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })
        const newContact = await this.prisma.contact.create({
            data: {
                email: data.email,
                name: data.name,
                phone: data.phone,
                client: {
                    connect: {id: Number(clientId)}
                }
            }
        })
        return newContact
    }
    async findAll(): Promise<Contact[]> {
        const contacts = await this.prisma.contact.findMany()
        return contacts
    }
    async findOne(id: number): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: { id }
        })
        return contact
    }
    async update(id: number, data: UpdateContactDto): Promise<Contact> {
        console.log(data)
        const contact = await this.prisma.contact.update({
            where: { id },
            data: { ...data }
        })
        return contact
    }
    async delete(id: number): Promise<void> {
        await this.prisma.contact.delete({
            where: { id }
        })
    }
}