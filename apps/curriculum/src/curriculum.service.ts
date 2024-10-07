import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { PrismaService } from '../../shared-logic/prisma/prisma.service';
import { Class, Course } from '@prisma/client';
import { ClassSchema, CourseSchema } from '../../shared-logic/src/dto/dto';

@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllClasses() {
    const currentDate = new Date();
    const classes = await this.prisma.class.findMany({
      include: {
        students: {
          select: {
            student_id: true,
            student_nickname: true,
          },
        },
        class_size_id: {
          select: {
            class_size_id: true,
            class_size_name: true,
          },
        },
      },
    });
    const filteredClasses = classes.filter((classItem) => {
      return (
        classItem.start_date >= currentDate &&
        classItem.students.length <=
          parseInt(
            classItem.class_size_id.class_size_name[
              classItem.class_size_id.class_size_name.split('_')[
                classItem.class_size_id.class_size_name.split('_').length - 1
              ]
            ],
          )
      );
    });
    return filteredClasses;
  }

  async getClassByID(class_id: string): Promise<Class> {
    const classToGet = await this.prisma.class.findUnique({
      where: {
        class_id,
      },
    });
    if (!classToGet) {
      throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }
    return classToGet;
  }

  async createClass(createClass: ClassSchema): Promise<Class> {
    return await this.prisma.class.create({ data: createClass });
  }

  async deleteClass(class_id: string) {
    const classToGet = await this.prisma.class.findUnique({
      where: {
        class_id,
      },
    });
    if (!classToGet) {
      throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }
    await this.prisma.class.updateMany({
      where: {
        class_id: class_id,
      },
      data: {
        deleted: true,
      },
    });
    return classToGet.class_id;
  }

  async updateClass(class_id: string, updatedClassData: ClassSchema): Promise<Class> {
    const classToUpdate = await this.prisma.class.findUnique({
      where: {
        class_id,
      },
    });
    if (!classToUpdate) {
      throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }
    await this.prisma.class.update({
      data: {
        ...updatedClassData,
      },
      where: { class_id: class_id },
    });
    return classToUpdate;
  }

  async getAllCourses() {
    return await this.prisma.course.findMany();
  }

  async getCourseByID(course_code: string): Promise<Course> {
    const courseToGet = await this.prisma.course.findUnique({
      where: {
        course_code,
      },
    });
    if (!courseToGet) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    return courseToGet;
  }

  async createCourse(createCourse: CourseSchema): Promise<Course> {
    return await this.prisma.course.create({ data: createCourse });
  }

  async deleteCourse(course_code: string) {
    const courseToGet = await this.prisma.course.findUnique({
      where: {
        course_code,
      },
    });
    if (!courseToGet) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    await this.prisma.course.delete({
      where: {
        course_code: course_code,
      },
    });
    return courseToGet.course_code;
  }

  async updateCourse(course_code: string, updatedCourseData: CourseSchema): Promise<Course> {
    const courseToUpdate = await this.prisma.course.findUnique({
      where: {
        course_code,
      },
    });
    if (!courseToUpdate) {
      throw new HttpException('Course not found', HttpStatus.NOT_FOUND);
    }
    await this.prisma.course.update({
      data: {
        ...updatedCourseData,
      },
      where: { course_code: course_code },
    });
    return courseToUpdate;
  }
}