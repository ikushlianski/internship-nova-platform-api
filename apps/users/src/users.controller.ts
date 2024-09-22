import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ParsedUserData} from '../../gateway/src/auth/auth.types';
import { User } from 'prisma/prisma-client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'create_user' })
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    const user = await this.usersService.findOrCreateUser(userDto);
    return user;
  }

  @MessagePattern({ cmd: 'get_user' })
  async handleGetUserByID(@Payload() id: string) {
    return {
      id,
      email: 'abc@test-user.com',
      name: 'Test User',
    };
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
