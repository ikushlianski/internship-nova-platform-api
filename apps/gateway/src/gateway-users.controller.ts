import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { RabbitMQ } from '../../shared-logic/src/RabbitMQ/rabbitmq.enums';

import { ParsedUserData, RequestWithUser } from './auth/auth.types';
import { SERVICE_NAMES } from './service-names';
import { JwtGuard } from './auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @Get('test_RMQ')
  sendMessage() {
    const message = { text: 'Message from USERS_MS' };
    return this.client.send(RabbitMQ.TEST_MESSAGE, message);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() userDto: ParsedUserData) {
    return this.client.send({ cmd: RabbitMQ.CREATE_USER_COMMAND }, userDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUsers() {
    return this.client.send({ cmd: RabbitMQ.GET_ALL_USERS_COMMAND }, {});
  }
}

@Controller('me')
export class MeRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @UseGuards(JwtGuard)
  @Get('/')
  sendMessage(@Request() req: RequestWithUser) {
    const message = { email: req.user.email };
    return this.client.send(RabbitMQ.GET_USER, message);
  }
}
