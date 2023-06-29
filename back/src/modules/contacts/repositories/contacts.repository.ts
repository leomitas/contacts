import { Contact } from "../entities/contact.entity" 
import { CreateContactDto } from "../dto/create-contact.dto" 
import { UpdateContactDto } from "../dto/update-contact.dto" 


export abstract class ContactsRepository {
    abstract create(data: CreateContactDto, clientId: number): Promise<Contact>
    abstract findAll(): Promise<Contact[]>
    abstract findOne(id: number): Promise<Contact>
    abstract update(id: number, data: UpdateContactDto): Promise<Contact>
    abstract delete(id: number): Promise<void>
}