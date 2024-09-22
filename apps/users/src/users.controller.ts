import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @MessagePattern({ cmd: 'create_user' })
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    const user = await this.usersService.findOrCreateUser(userDto);
    return user;
  }

  @MessagePattern('main_queue')
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }

  @MessagePattern({ cmd: 'find_user_by_email' })
  async handleGetUserByEmail(@Payload() email: string) {
    return await this.usersService.findUserByEmail(email);
  }

  @MessagePattern({ cmd: 'get_all_users' })
  async handleGetAllUsers() {
    const users = await this.usersService.getAllUsers();
    return users;
  }
}
