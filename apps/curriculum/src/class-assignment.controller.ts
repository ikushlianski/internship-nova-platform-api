import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClassAssignmentService } from './class-assignment.service';
import { StudentDto } from './assign-student.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

@Controller('class-assignment')
export class ClassAssignmentController {
  constructor(private readonly classAssignmentService: ClassAssignmentService) {}


  @MessagePattern({ cmd: RabbitMQ.ASSIGN_STUDENT_TO_CLASS })
  async assignStudentToClass(@Payload() studentDto: StudentDto) {
    try {
      return await this.classAssignmentService.assignStudent(studentDto);
    } catch (error) {
      throw new Error(error.message); // Handle service-specific errors
    }
  }

  @MessagePattern({ cmd: RabbitMQ.GET_CLASS_ASSIGNMENTS })
  async getClassAssignments(@Payload() classId: string) {
    try {
      return await this.classAssignmentService.getClassAssignments(classId);
    } catch (error) {
      throw new Error(error.message); // Handle service-specific errors
    }
  }
}
