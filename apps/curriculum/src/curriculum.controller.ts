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

  @MessagePattern({ cmd: 'get_all_classes' })
  getAllClasses() {
    return this.curriculumService.getAllClasses();
  }

  @MessagePattern({ cmd: 'get_class_by_id' })
  getClassByID(@Payload() class_id: string) {
    return this.curriculumService.getClassByID(class_id);
  }

  @MessagePattern({ cmd: 'create_class' })
  async createClass(@Payload() newClass: ClassSchema) {
    const createdClass = await this.curriculumService.createClass(newClass);
    return createdClass;
  }

  @MessagePattern({ cmd: 'delete_class_by_id' })
  async deleteClass(@Payload() class_id: string) {
    const classID = this.curriculumService.deleteClass(class_id);
    return classID;
  }

  @MessagePattern({ cmd: 'update_class_by_id' })
  async updateClassInfo(@Payload() class_id: string, updatedClassData: ClassSchema) {
    const updatedClass = await this.curriculumService.updateClass(class_id, updatedClassData);
    return updatedClass;
  }

  @MessagePattern({ cmd: 'get_all_courses' })
  getAllCourses() {
    return this.curriculumService.getAllCourses();
  }

  @MessagePattern({ cmd: 'get_course_by_code' })
  getCourseByID(@Payload() course_code: string) {
    return this.curriculumService.getCourseByID(course_code);
  }

  @MessagePattern({ cmd: 'create_course' })
  async createCourse(@Payload() newCourse: CourseSchema) {
    const createdCourse = await this.curriculumService.createCourse(newCourse);
    return createdCourse;
  }

  @MessagePattern({ cmd: 'delete_course_by_code' })
  async deleteCourse(@Payload() course_code: string) {
    const courseCode = this.curriculumService.deleteCourse(course_code);
    return courseCode;
  }

  @MessagePattern({ cmd: 'update_course_by_code' })
  async updateCourseInfo(@Payload() course_code: string, updatedCourseData: CourseSchema) {
    const updatedCourse = await this.curriculumService.updateCourse(course_code, updatedCourseData);
    return updatedCourse;
  }
}
