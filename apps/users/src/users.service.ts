import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/users/src/prisma/prisma.service';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';

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

  async findUserByEmail(email: string) {
    let user = await this.prismaService.user.findUnique({
      where: { user_email: email },
    });
    return user;
  }

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      orderBy: {
        user_email: 'asc',
      },
    });
  }
  // Student controller logic temp
  async getAllStudents() {
    return await 'all students';
  }
  async findOrCreateStudent(userDto: ParsedUserData) {
    let user = await this.prismaService.user.findUnique({
      where: { user_email: userDto.user_email },
    });

    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          ...userDto,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          user_roles: {
            create: [
              {
                role_id: '1',
              },
            ],
          },
        },
      });
    } else {
      user = await this.prismaService.user.update({
        where: {
          user_email: userDto.user_email,
        },
        data: {
          ...userDto,
          updated_at: new Date().toISOString(),
          user_roles: {
            create: [
              {
                role_id: '1',
              },
            ],
          },
        },
      });
    }
    let student = await this.prismaService.student.create({
      data: {
        student_id: userDto.user_email,
        student_nickname: user.nickname || null,
        user: {
          connect: {
            user_email: userDto.user_email,
          },
        },
        class: {
          connect: {
            class_id: '0',
          },
        },
      },
    });

    return student;
  }
}
