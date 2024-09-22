import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
// import { SERVICE_NAMES } from './service-names';
import { ClientProxy } from '@nestjs/microservices';
import { ParsedUserData } from './auth/auth.types';
import { SERVICE_NAMES } from './service-names';
// import { ParsedUserData } from './auth/auth.types';

@Controller('students')
export class StudentsRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy,
  ) { }

  @Get(':id')
  getStudentByID(@Param('id') id) {
    return this.client.send({ cmd: 'get_student' }, id);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createStudent(@Body() userDto: ParsedUserData) {
    return this.client.send({ cmd: 'create_student' }, userDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllStudents() {
    return this.client.send({ cmd: 'get_all_students' }, {});
  }
}
