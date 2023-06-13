import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../Auth/auth.service';

@Controller('users')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Request() req) {
    const { username, password } = req.body;
    await this.authService.register(username, password);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
