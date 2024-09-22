import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { SERVICE_NAMES } from './service-names';
import { ClientProxy } from '@nestjs/microservices';
import { ParsedUserData } from './auth/auth.types';

@Controller('users')
export class UsersRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @Get(':id')
  getUserByID(@Param('id') id) {
    return this.client.send({ cmd: 'get_user' }, id);
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
