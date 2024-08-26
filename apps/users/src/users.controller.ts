// src/users/users.controller.ts
import { Controller, Patch, Body, Req, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import {Public} from '../../gateway/src/auth/public.decorator'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  
  @Patch('accept-terms')
  async acceptTerms(@Req() req, @Body('accepted') accepted: boolean) {
    const userId = req.user.id;

    if (!accepted) {
      throw new Error('You must read and accept the Privacy Policy');
    }

    return this.usersService.updateTermsAcceptance(userId, accepted);
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findUserById(id);
  }
}
