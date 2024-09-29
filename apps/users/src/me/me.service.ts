import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUser(email: string) {
    let user = await this.prismaService.user.findUnique({
      where: { user_email: email },
      include: {
        user_roles: {
          include: {
            role: true,
          },
        },
      },
    });

    return user;
  }
}
