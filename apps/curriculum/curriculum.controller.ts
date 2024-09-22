import { Controller } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { ClassSchema, CourseSchema } from '../shared-logic/src/dto/dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('curriculum')
export class CurriculumController {
  constructor(private curriculumService: CurriculumService) {}

  @MessagePattern({ cmd: 'getAllClasses' })
  getAllClasses() {
    return this.curriculumService.getAllClasses();
  }

  @MessagePattern({ cmd: 'getClassByID' })
  getClassByID(@Payload() class_id: string) {
    return this.curriculumService.getClassByID(class_id);
  }

  @MessagePattern({ cmd: 'createClass' })
  async createClass(@Payload() newClass: ClassSchema) {
    const createdClass = await this.curriculumService.createClass(newClass);
    return createdClass;
  }

  @MessagePattern({ cmd: 'deleteClass' })
  async deleteClass(@Payload() class_id: string) {
    const classID = this.curriculumService.deleteClass(class_id);
    return classID;
  }

  @MessagePattern({ cmd: 'updateClassInfo' })
  async updateClassInfo(@Payload() class_id: string, updatedClassData: ClassSchema) {
    const updatedClass = await this.curriculumService.updateClass(class_id, updatedClassData);
    return updatedClass;
  }

  @MessagePattern({ cmd: 'getAllCourses' })
  getAllCourses() {
    return this.curriculumService.getAllCourses();
  }

  @MessagePattern({ cmd: 'getCourseByID' })
  getCourseByID(@Payload() course_code: string) {
    return this.curriculumService.getCourseByID(course_code);
  }

  @MessagePattern({ cmd: 'createCourse' })
  async createCourse(@Payload() newCourse: CourseSchema) {
    const createdCourse = await this.curriculumService.createCourse(newCourse);
    return createdCourse;
  }

  @MessagePattern({ cmd: 'deleteCourse' })
  async deleteCourse(@Payload() course_code: string) {
    const courseCode = this.curriculumService.deleteCourse(course_code);
    return courseCode;
  }

  @MessagePattern({ cmd: 'updateCourseInfo' })
  async updateCourseInfo(@Payload() course_code: string, updatedCourseData: CourseSchema) {
    const updatedCourse = await this.curriculumService.updateCourse(course_code, updatedCourseData);
    return updatedCourse;
  }
}
