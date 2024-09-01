import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/gateway/src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOrCreateUser(email: string) {
    let user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await this.prismaService.user.create({
        data: { email },
      });
    }

    return user;
  }
}





