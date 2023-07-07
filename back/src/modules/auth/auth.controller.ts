import { Controller, Post, UseGuards, Body } from '@nestjs/common' 
import { AuthService } from './auth.service' 
import { LocalAuthGuard } from './local-auth.guard' 

interface IClientLogin {
  email: string
  password: string
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: IClientLogin) {
    return this.authService.login(user.email)
  }
}