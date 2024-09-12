import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() userDto: ParsedUserData) {
    const user = await this.usersService.createUser(userDto);

    return user;
  }

  @MessagePattern({ cmd: 'find_or_create_user' })
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    const user = await this.usersService.findOrCreateUser(userDto);

    return user;
  }

  @MessagePattern('main_queue')
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }
}
