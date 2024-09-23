import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { RABBIT_COMMANDS } from 'apps/shared-logic/src/envs/environments';

import { ParsedUserData } from './auth/auth.types';
import { SERVICE_NAMES } from './service-names';

@Controller('users')
export class UsersRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @Get('test_rabbit')
  sendMessage() {
    const message = { text: 'Hello from Gateway' };
    return this.client.send(RABBIT_COMMANDS.TEST_COMMAND, message);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() userDto: ParsedUserData) {
    return this.client.send({ cmd: RABBIT_COMMANDS.CREATE_USER }, userDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    return this.client.send({ cmd: RABBIT_COMMANDS.GET_ALL_USERS }, {});
  }
}
