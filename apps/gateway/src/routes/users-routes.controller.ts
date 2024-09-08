import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_NAMES } from '../service-names';

@Controller('users')
export class UsersRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy,
  ) {}

  @Get(':id')
  getUserByID(@Param('id') id: string) {
    console.log(`Sending request to get user with ID: ${id}`);
    return this.client.send({ cmd: 'get_user' }, id);
  }
}
