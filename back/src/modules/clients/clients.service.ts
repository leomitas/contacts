import { Injectable } from '@nestjs/common'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { ClientsRepository } from './repositories/clients.repository'

@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientsRepository) {}
  async create(createClientDto: CreateClientDto) {
    const client = await this.clientRepository.create(createClientDto)
    return client
  }

  async findAll() {
    const clients = await this.clientRepository.findAll()
    return clients
  }

  async findOne(id: number) {
    const client = await this.clientRepository.findOne(id)
    return client
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.update(id, updateClientDto)
    return client
  }

  async remove(id: number) {
    await this.clientRepository.delete(id)
    return 
  }
}
