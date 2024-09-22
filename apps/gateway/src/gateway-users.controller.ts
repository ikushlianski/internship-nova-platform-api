import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ParsedUserData } from './auth/auth.types';
import { SERVICE_NAMES } from './service-names';

@Controller('users')
export class UsersRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @Get('test-rabbit')
  sendMessage() {
    const message = { text: 'Hello from Gateway' };
    return this.client.send('main_queue', message);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() userDto: ParsedUserData) {
    return this.client.send({ cmd: 'create_user' }, userDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    return this.client.send({ cmd: 'get_all_users' }, {});
  }
}
