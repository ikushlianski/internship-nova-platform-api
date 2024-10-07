import { Controller, Post, Body, HttpException, HttpStatus, Get, Param, UseGuards, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtGuard } from './auth/guards/jwt-auth.guard'; 
import { SERVICE_NAMES } from './service-names';
import { StudentDto } from 'apps/curriculum/src/assign-student.dto';


@Controller('curriculum')
export class CurriculumRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.CURRICULUM_SERVICE) private client: ClientProxy,  // Inject the curriculum service proxy
  ) {}

  @Post('assign-student')
  @UseGuards(JwtGuard)
  async assignStudentToClass(@Body() studentDto: StudentDto) {
    try {
      // Forward the assign student request to the curriculum microservice
      return await this.client.send({ cmd: 'assign_student_to_class' }, studentDto).toPromise();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('class-assignments/:id')
  @UseGuards(JwtGuard)
  async getClassAssignments(@Param('id') classId: string) {
    try {
      // Forward the get class assignments request to the curriculum microservice
      return await this.client.send({ cmd: 'get_class_assignments' }, classId).toPromise();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  
}
