import { Injectable } from '@nestjs/common'
import { UpdateContactDto } from './dto/update-contact.dto'
import { CreateContactDto } from './dto/create-contact.dto'
import { ContactsRepository } from './repositories/contacts.repository'

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, clientId: number) {
    const contact = await this.contactRepository.create(createContactDto, clientId)
    return contact
  }

  async findAll() {
    const contacts = await this.contactRepository.findAll()
    return contacts
  }

  async findOne(id: number) {
    const contact = await this.contactRepository.findOne(id)
    return contact
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    console.log(updateContactDto)
    const contact = await this.contactRepository.update(id, updateContactDto)
    return contact
  }

  async remove(id: number) {
    await this.contactRepository.delete(id)
    return 
  }
}
