import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async findAllClasses() {
    return await this.prisma.class.findMany();
  }

  async findAllCourses() {
    return await this.prisma.course.findMany();
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} class`;
  // }

  // update(id: number, updateClassDto: UpdateClassDto) {
  //   return `This action updates a #${id} class`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} class`;
  // }
}