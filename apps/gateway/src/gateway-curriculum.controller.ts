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
import { ValidateIdPipe } from 'apps/curriculum/src/pipes/validation.pipe';
import { ClassSchema, CourseSchema } from 'apps/shared-logic/src/dto/dto';
import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

@Controller('curriculum')
export class CurriculumRoutesController {
  constructor(@Inject(SERVICE_NAMES.CURRICULUM_SERVICE) private client: ClientProxy) {}

  @Get('test_RMQ')
  sendMessage() {
    const message = { text: 'Message from CURRICULUM_MS' };
    return this.client.send(RabbitMQ.TEST_MESSAGE, message);
  }

  @Public()
  @Get('class')
  getAllClasses() {
    return this.client.send({ cmd: RabbitMQ.GET_ALL_CLASSES }, {});
  }

  @Get('class/:class_id')
  @HttpCode(HttpStatus.OK)
  getClassByID(@Param('class_id', ValidateIdPipe) class_id: string) {
    return this.client.send({ cmd: RabbitMQ.GET_CLASS_BY_ID }, { class_id });
  }

  @Post('class')
  @HttpCode(HttpStatus.CREATED)
  async createClass(@Body() newClass: ClassSchema) {
    return this.client.send({ cmd: RabbitMQ.CREATE_CLASS }, { newClass });
  }

  @Delete('class/:class_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteClass(@Param('class_id', ValidateIdPipe) class_id: string) {
    return this.client.send({ cmd: RabbitMQ.DELETE_CLASS_BY_ID }, { class_id });
  }

  @Put('class/:class_id')
  async updateClassInfo(
    @Param('class_id', ValidateIdPipe) class_id: string,
    @Body() updatedClassData: ClassSchema,
  ) {
    return this.client.send({ cmd: RabbitMQ.UPDATE_CLASS_BY_ID }, { class_id, updatedClassData });
  }

  @Public()
  @Get('course')
  async getAllCourses() {
    return this.client.send({ cmd: RabbitMQ.GET_ALL_COURSES }, {});
  }

  @Get('course/:course_code')
  @HttpCode(HttpStatus.OK)
  getCourseByID(@Param('course_code', ValidateIdPipe) course_code: string) {
    return this.client.send({ cmd: RabbitMQ.GET_COURSE_BY_CODE }, { course_code });
  }

  @Post('course')
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() newCourse: CourseSchema) {
    return this.client.send({ cmd: RabbitMQ.CREATE_COURSE }, { newCourse });
  }

  @Delete('course/:course_code')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCourse(@Param('course_code', ValidateIdPipe) course_code: string) {
    return this.client.send({ cmd: RabbitMQ.DELETE_COURSE_BY_CODE }, { course_code });
  }

  @Put('course/:course_code')
  async updateCourseInfo(
    @Param('course_code', ValidateIdPipe) course_code: string,
    @Body() updatedCourseData: CourseSchema,
  ) {
    return this.client.send({ cmd: RabbitMQ.UPDATE_COURSE_BY_CODE }, { course_code, updatedCourseData });
  }
}
