import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClassAssignmentService } from './class-assignment.service';
import { StudentDto } from './assign-student.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

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

  // Message pattern to get all classes with assigned students
  @MessagePattern({ cmd: 'get_all_classes' })
  async handleGetClassesWithAssignedStudents() {
    return await this.classAssignmentService.getClassesWithAssignedStudents();
  }

  // Message pattern to get class details by class ID
  @MessagePattern({ cmd: 'get_class_details' })
  async handleGetClassDetails(@Payload() id: string) {
    // Assuming you have a method in ClassService to get specific class details
    return await this.classAssignmentService.getClassDetails(id);
  }
}
