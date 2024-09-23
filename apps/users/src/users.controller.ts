import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';
import { UsersService } from './users.service';
import { RabbitMQ } from '../../shared-logic/src/RabbitMQ/rabbitmq.enums';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: RabbitMQ.CREATE_USER_COMMAND })
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    return await this.usersService.findOrCreateUser(userDto);
  }

  @MessagePattern(RabbitMQ.TEST_MESSAGE)
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }

  @MessagePattern({ cmd: RabbitMQ.FIND_USER_BY_EMAIL_COMMAND })
  async handleGetUserByEmail(@Payload() email: string) {
    return await this.usersService.findUserByEmail(email);
  }

  @MessagePattern({ cmd: RabbitMQ.GET_ALL_USERS_COMMAND })
  async handleGetAllUsers() {
    return await this.usersService.getAllUsers();
  }
}
