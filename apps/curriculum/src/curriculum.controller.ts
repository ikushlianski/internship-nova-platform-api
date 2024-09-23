import { Controller } from '@nestjs/common';
import { ClassSchema, CourseSchema } from '../../shared-logic/src/dto/dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';
import { CurriculumService } from './curriculum.service';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @MessagePattern(RabbitMQ.TEST_MESSAGE)
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }

  @MessagePattern({ cmd: RabbitMQ.GET_ALL_CLASSES })
  getAllClasses() {
    return this.curriculumService.getAllClasses();
  }

  @MessagePattern({ cmd: RabbitMQ.GET_CLASS_BY_ID })
  getClassByID(@Payload() class_id: string) {
    return this.curriculumService.getClassByID(class_id);
  }

  @MessagePattern({ cmd: RabbitMQ.CREATE_CLASS })
  async createClass(@Payload() newClass: ClassSchema) {
    const createdClass = await this.curriculumService.createClass(newClass);
    return createdClass;
  }

  @MessagePattern({ cmd: RabbitMQ.DELETE_CLASS_BY_ID })
  async deleteClass(@Payload() class_id: string) {
    const classID = this.curriculumService.deleteClass(class_id);
    return classID;
  }

  @MessagePattern({ cmd: RabbitMQ.UPDATE_CLASS_BY_ID })
  async updateClassInfo(@Payload() class_id: string, updatedClassData: ClassSchema) {
    const updatedClass = await this.curriculumService.updateClass(class_id, updatedClassData);
    return updatedClass;
  }

  @MessagePattern({ cmd: RabbitMQ.GET_ALL_COURSES })
  getAllCourses() {
    return this.curriculumService.getAllCourses();
  }

  @MessagePattern({ cmd: RabbitMQ.GET_COURSE_BY_CODE })
  getCourseByID(@Payload() course_code: string) {
    return this.curriculumService.getCourseByID(course_code);
  }

  @MessagePattern({ cmd: RabbitMQ.CREATE_COURSE })
  async createCourse(@Payload() newCourse: CourseSchema) {
    const createdCourse = await this.curriculumService.createCourse(newCourse);
    return createdCourse;
  }

  @MessagePattern({ cmd: RabbitMQ.DELETE_COURSE_BY_CODE })
  async deleteCourse(@Payload() course_code: string) {
    const courseCode = this.curriculumService.deleteCourse(course_code);
    return courseCode;
  }

  @MessagePattern({ cmd: RabbitMQ.UPDATE_COURSE_BY_CODE })
  async updateCourseInfo(@Payload() course_code: string, updatedCourseData: CourseSchema) {
    const updatedCourse = await this.curriculumService.updateCourse(course_code, updatedCourseData);
    return updatedCourse;
  }
}
