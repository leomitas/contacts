import { Injectable } from '@nestjs/common' 
import { ClientsService } from '../clients/clients.service' 
import { JwtService } from '@nestjs/jwt' 
import { compare } from 'bcryptjs' 

@Injectable()
export class AuthService {
    constructor(
        private clientsService: ClientsService,
        private jwtService: JwtService,
        ){}
    async validateClient(clientEmail: string, clientPassword: string) {
        const client = await this.clientsService.findByEmail(clientEmail)
        if (client) {
          const passwordMatch = await compare(clientPassword, client.password)
          if (passwordMatch) {
            return { email: client.email }
          }
        }
    return null
    }
    async login(email: string) {
        const user = await this.clientsService.findByEmail(email)
        return {
          token: this.jwtService.sign({ email }, { subject: user.id.toString() }),
        }
    }
}
