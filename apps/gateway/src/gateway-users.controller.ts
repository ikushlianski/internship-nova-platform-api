import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { SERVICE_NAMES } from './service-names';

@Controller('users')
export class UsersRoutesController {
  constructor(@Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy) {}

  @Get('test-rabbit')
  sendMessage() {
    const message = { text: 'Hello from Gateway' };
    return this.client.send('main_queue', message);
  }
}
