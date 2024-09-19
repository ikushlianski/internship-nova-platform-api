import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  Put,
} from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { Public } from '../gateway/src/auth/public.decorator';
import { ClassSchema, CourseSchema} from './dto/curriculum.dto';
import { ValidateIdPipe } from './pipes/validation.pipe';

@Controller('curriculum')
export class CurriculumController {
  constructor(private curriculumService: CurriculumService) {}

  @Public()
  @Get('class')
  getAllClasses() {
    return this.curriculumService.getAllClasses();
  }

  @Get('class/:class_id')
  @HttpCode(HttpStatus.OK)
  getClassByID(@Param('class_id', ValidateIdPipe) class_id: string) {
    return this.curriculumService.getClassByID(class_id);
  }

  @Post('class')
  @HttpCode(HttpStatus.CREATED)
  async createClass(@Body() newClass: ClassSchema) {
    const createdClass = await this.curriculumService.createClass(newClass);
    return createdClass;
  }

  @Delete('class/:class_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteClass(@Param('class_id', ValidateIdPipe) class_id: string) {
    const classID = this.curriculumService.deleteClass(class_id);
    return classID;
  }

  @Put('class/:class_id')
  async updateClassInfo(
    @Param('class_id', ValidateIdPipe) class_id: string,
    @Body() updatedClassData: ClassSchema,
  ) {
    const updatedClass = await this.curriculumService.updateClass(class_id, updatedClassData);
    return updatedClass;
  }

  @Get('course')
  getAllCourses() {
    return this.curriculumService.getAllCourses();
  }

  @Get('course/:course_code')
  @HttpCode(HttpStatus.OK)
  getCourseByID(@Param('course_code', ValidateIdPipe) course_code: string) {
    return this.curriculumService.getCourseByID(course_code);
  }

  @Post('course')
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() newCourse: CourseSchema) {
    const createdCourse = await this.curriculumService.createCourse(newCourse);
    return createdCourse;
  }

  @Delete('course/:course_code')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCourse(@Param('course_code', ValidateIdPipe) course_code: string) {
    const courseCode = this.curriculumService.deleteCourse(course_code);
    return courseCode;
  }

  @Put('course/:course_code')
  async updateCourseInfo(
    @Param('course_code', ValidateIdPipe) course_code: string,
    @Body() updatedCourseData: CourseSchema,
  ) {
    const updatedCourse = await this.curriculumService.updateCourse(
      course_code,
      updatedCourseData,
    );
    return updatedCourse;
  }
}
