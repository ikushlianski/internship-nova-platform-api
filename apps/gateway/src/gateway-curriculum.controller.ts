import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { Inject } from '@nestjs/common';
import { Public } from './auth/public.decorator';
import { ValidateIdPipe } from 'apps/curriculum/pipes/validation.pipe';
import { ClassSchema, CourseSchema } from 'apps/curriculum/dto/curriculum.dto';

@Controller('curriculum')
export class CurriculumRoutesController {
  constructor(@Inject(SERVICE_NAMES.CURRICULUM_SERVICE) private client: ClientProxy) {}

  @Public()
  @Get('class')
  getAllClasses() {
    return this.client.send({ cmd: 'getAllClasses' }, {});
  }

  @Get('class/:class_id')
  @HttpCode(HttpStatus.OK)
  getClassByID(@Param('class_id', ValidateIdPipe) class_id: string) {
    return this.client.send({ cmd: 'getClassByID' }, { class_id });
  }

  @Post('class')
  @HttpCode(HttpStatus.CREATED)
  async createClass(@Body() newClass: ClassSchema) {
    return this.client.send({ cmd: 'createClass' }, { newClass });
  }

  @Delete('class/:class_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteClass(@Param('class_id', ValidateIdPipe) class_id: string) {
    return this.client.send({ cmd: 'deleteClass' }, { class_id });
  }

  @Put('class/:class_id')
  async updateClassInfo(
    @Param('class_id', ValidateIdPipe) class_id: string,
    @Body() updatedClassData: ClassSchema,
  ) {
    return this.client.send({ cmd: 'updateClassInfo' }, { class_id, updatedClassData });
  }

  @Get('course')
  async getAllCourses() {
    return this.client.send({ cmd: 'getAllCourses' }, {});
  }

  @Get('course/:course_code')
  @HttpCode(HttpStatus.OK)
  getCourseByID(@Param('course_code', ValidateIdPipe) course_code: string) {
    return this.client.send({ cmd: 'getCourseByID' }, { course_code });
  }

  @Post('course')
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() newCourse: CourseSchema) {
    return this.client.send({ cmd: 'createCourse' }, { newCourse });
  }

  @Delete('course/:course_code')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCourse(@Param('course_code', ValidateIdPipe) course_code: string) {
    return this.client.send({ cmd: 'deleteCourse' }, { course_code });
  }

  @Put('course/:course_code')
  async updateCourseInfo(
    @Param('course_code', ValidateIdPipe) course_code: string,
    @Body() updatedCourseData: CourseSchema,
  ) {
    return this.client.send({ cmd: 'updateCourseInfo' }, { course_code, updatedCourseData });
  }
}
