import { Module } from '@nestjs/common' 
import { AuthService } from './auth.service' 
import { AuthController } from './auth.controller' 
import { ClientsModule } from '../clients/clients.module' 
import { LocalStrategy } from './local.strategy' 
import { PassportModule } from '@nestjs/passport' 
import { JwtModule } from '@nestjs/jwt' 
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    ClientsModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
