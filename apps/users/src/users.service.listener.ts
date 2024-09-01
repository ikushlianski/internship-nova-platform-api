import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';


@Injectable()
export class UsersServiceListener {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('find_or_create_user')
  async handleFindOrCreateUser(@Payload() userDto: ParsedUserData) {
    const user = await this.usersService.findOrCreateUser(userDto.email);
    return user;
  }
}
