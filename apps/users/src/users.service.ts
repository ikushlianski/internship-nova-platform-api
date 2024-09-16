import { Injectable } from '@nestjs/common';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';
import { PrismaService } from 'apps/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userDto: ParsedUserData) {
    return await this.findOrCreateUser(userDto);
  }

  async findOrCreateUser(userDto: ParsedUserData) {
    let user = await this.prismaService.user.findUnique({
      where: { user_email: userDto.user_email },
    });

    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          ...userDto,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      });
    }

    return user;
  }
}
