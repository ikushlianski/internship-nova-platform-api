import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserSchema } from 'apps/shared-logic/src/dto/dto';
import { User } from 'prisma/prisma-client';

@Injectable()
export class LeadService {
  constructor(private readonly prisma: PrismaService) {}

 async findOrCreateLeadUser(newLeadUser: UserSchema): Promise<User> {
    let user = await this.prisma.user.findUnique({
      where: { user_email: newLeadUser.user_email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          ...newLeadUser,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted: false,
          user_roles: {
            create: [
              { role: { create: { role_id: "LEAD", role_name: "Lead" } } },
            ]
          }
        },
      });
    }
    return user;
  }
}



