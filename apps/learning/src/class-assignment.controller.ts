import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ClassAssignmentService } from './class-assignment.service';
import { StudentDto } from './assign-student.dto';



@Controller('class-assignment')
export class ClassAssignmentController {
  constructor(private readonly classAssignmentService: ClassAssignmentService) {}

  @Post('assign')
  async assignStudentToClass(@Body() assignStudentDto: StudentDto) {
    try {
      const result = await this.classAssignmentService.assignStudentToClass(assignStudentDto);
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
