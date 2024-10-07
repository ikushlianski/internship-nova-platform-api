import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  // Message pattern to get all classes with assigned students
  @MessagePattern({ cmd: 'get_all_classes' })
  async handleGetClassesWithAssignedStudents() {
    return await this.classService.getClassesWithAssignedStudents();
  }

  // Message pattern to get class details by class ID
  @MessagePattern({ cmd: 'get_class_details' })
  async handleGetClassDetails(@Payload() id: string) {
    // Assuming you have a method in ClassService to get specific class details
    return await this.classService.getClassDetails(id);
  }
}
