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
  UseGuards,
} from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { Public } from '../gateway/src/auth/public.decorator';
import { ClassSchema, CourseSchema, IDClassParametr, IDCourseParametr } from './dto/curriculum.dto';
import { JwtGuard } from 'apps/gateway/src/auth/guards/jwt-auth.guard';

@Controller('curriculum')
export class CurriculumController {
  constructor(private curriculumService: CurriculumService) {}

  @Public()
  @Get()
  getAllClasses() {
    return this.curriculumService.getAllClasses();
  }

  @Public()
  @Get(':class_id')
  @HttpCode(HttpStatus.OK)
  getClassByID(@Param() ClassToGet: IDClassParametr) {
    return this.curriculumService.getClassByID(ClassToGet.class_id);
  }

  @UseGuards(JwtGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createClass(@Body() newClass: ClassSchema) {
    const createdClass = await this.curriculumService.createClass(newClass);
    return createdClass;
  }

  @UseGuards(JwtGuard)
  @Delete(':class_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteClass(@Param() ClassToDelete:  IDClassParametr) {
    const classID = this.curriculumService.deleteClass(ClassToDelete.class_id);
    return classID;
  }

  @UseGuards(JwtGuard)
  @Put(':class_id')
  async updateClassInfo(
    @Param() classToUpdate: IDClassParametr,
    @Body() updatedClassData: ClassSchema,
  ) {
    const updatedClass = await this.curriculumService.updateClass(
      classToUpdate.class_id,
     updatedClassData,
    );
    return updatedClass;
  }

  @Public()
  @Get()
  getAllCourses() {
    return this.getAllCourses();
  }


  @Public()
  @Get(':course_code')
  @HttpCode(HttpStatus.OK)
  getCourseByID(@Param() CourseToGet: IDCourseParametr) {
    return this.curriculumService.getCourseByID(CourseToGet.course_code);
  }

  @UseGuards(JwtGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createCourse(@Body() newCourse: CourseSchema) {
    const createdCourse = await this.curriculumService.createCourse(newCourse);
    return createdCourse;
  }

  @UseGuards(JwtGuard)
  @Delete(':course_code')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteCourse(@Param() CourseToDelete:  IDCourseParametr) {
    const courseCode = this.curriculumService.deleteCourse(CourseToDelete.course_code);
    return  courseCode;
  }

  @UseGuards(JwtGuard)
  @Put(':course_code')
  async updateCourseInfo(
    @Param() courseToUpdate:  IDCourseParametr,
    @Body() updatedCourseData: CourseSchema,
  ) {
    const updatedCourse = await this.curriculumService.updateCourse(
      courseToUpdate.course_code,
     updatedCourseData,
    );
    return updatedCourse;
  }

}
