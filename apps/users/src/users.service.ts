import { Body, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'apps/users/src/prisma/prisma.service';
import { ParsedUserData } from '../../gateway/src/auth/auth.types';
import { User } from '@prisma/client';
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
  // Student controller logic
  async getAllStudents() {
    return 'all students';
  }

  async findOrCreateUserWRoleId(userDto: ParsedUserData,role:string) {
    //find or create user with role student
    console.log(userDto);
    let user = await this.prismaService.user.findUnique({
      where: { user_email: userDto.user_email },
    });

    if (!user) {
      user = await this.prismaService.user.create({
        data: {
          ...userDto,
          nickname: userDto.last_name,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          user_roles: {
            create: [
              {
                role_id: role, //role_id - STUDENT
              },
            ],
          },
        },
      });
    } else {
      const existingUserRole = await this.prismaService.userRole.findUnique({
        where: {
          user_email_role_id: {
            user_email: userDto.user_email,
            role_id: role, //role_id - STUDENT
          },
        },
      });
      if (!existingUserRole) {
        user = await this.prismaService.user.update({
          where: {
            user_email: userDto.user_email,
          },
          data: {
            updated_at: new Date().toISOString(),
            user_roles: {
              create: {
                role_id: role, //role_id - STUDENT
              },
            },
          },
        });
      } else {
        return null;
      }
    }
    return user;
  }
    // find or create student
    async findOrCreateStudent(userDto: User) {
    let student = await this.prismaService.student.findFirst({
      where: { user_id: userDto.user_email,
        
      },
    });
    if (!student) {
      student = await this.prismaService.student.create({
        data: {
          
          student_nickname: userDto.nickname,
          user: {
            connectOrCreate: {
              where: {
                user_email: userDto.user_email, // Check if user already exists
              },
              create: {
                ...userDto,
              },
            },
          },
        },
      });
    }

    return userDto;
  }
}
