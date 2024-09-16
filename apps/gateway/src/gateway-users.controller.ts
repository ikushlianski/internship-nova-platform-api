import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { SERVICE_NAMES } from './service-names';
import { ClientProxy } from '@nestjs/microservices';
import { ParsedAdminData } from './auth/auth.types';

@Controller('users')
export class UsersRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy,
  ) {}

  @Get(':id')
  getUserByID(@Param('id') id) {
    return this.client.send({ cmd: 'get_user' }, id);
  }

  @Post('/admin')
  addAdmin(@Body() body: ParsedAdminData){
    return this.client.send({ cmd: 'add_admin' }, body);
  }
  
}
