import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async findOrCreateUser(@Body('email') email: string) {
    const user = await this.usersService.findOrCreateUser(email);
    return user;
  }
}

