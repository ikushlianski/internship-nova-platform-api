import { Body, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'apps/users/src/prisma/prisma.service';
@Injectable()
export class MentorsService {
  constructor(private readonly prismaService: PrismaService) {}
async getAllMentors(){
  return "all mentors";
}
}
