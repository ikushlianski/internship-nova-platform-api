import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { RABBIT_COMMANDS } from 'apps/shared-logic/src/envs/environments';

import { ParsedUserData } from '../../gateway/src/auth/auth.types';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: RABBIT_COMMANDS.CREATE_USER })
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    const user = await this.usersService.findOrCreateUser(userDto);
    return user;
  }

  @MessagePattern(RABBIT_COMMANDS.TEST_COMMAND)
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }

  @MessagePattern({ cmd: RABBIT_COMMANDS.FIND_USER_BY_EMAIL })
  async handleGetUserByEmail(@Payload() email: string) {
    return await this.usersService.findUserByEmail(email);
  }

  @MessagePattern({ cmd: RABBIT_COMMANDS.GET_ALL_USERS })
  async handleGetAllUsers() {
    const users = await this.usersService.getAllUsers();
    return users;
  }
}
