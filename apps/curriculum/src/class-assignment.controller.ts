import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClassAssignmentService } from './class-assignment.service';
import { StudentDto } from './assign-student.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

@Controller('class-assignment')
export class ClassAssignmentController {
  constructor(private readonly classAssignmentService: ClassAssignmentService) {}

  @MessagePattern({ cmd: 'assign_student_to_class' })
  async assignStudentToClass(@Payload() studentDto: StudentDto) {
    try {
      return await this.classAssignmentService.assignStudent(studentDto);
    } catch (error) {
      throw new Error(error.message); // Handle service-specific errors
    }
  }

  @MessagePattern({ cmd: 'get_class_assignments' })
  async getClassAssignments(@Payload() classId: string) {
    try {
      return await this.classAssignmentService.getClassAssignments(classId);
    } catch (error) {
      throw new Error(error.message); // Handle service-specific errors
    }
  }
}
