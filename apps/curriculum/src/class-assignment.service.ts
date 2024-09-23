import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { StudentDto } from './assign-student.dto';
import { PrismaService } from './prisma/prisma.service';
import { ClassSize } from 'apps/shared-logic/src/envs/class-size.enum';

@Injectable()
export class ClassAssignmentService {
  constructor(private readonly prisma: PrismaService) {}

  // Renamed to match the controller
  async assignStudent(studentDto: StudentDto) {
    const { student_id, class_id } = studentDto;

    const classDetails = await this.prisma.class.findUnique({
      where: { class_id },
      include: {
        students: true,
        class_size_id: true,
      },
    });

    const studentDetails = await this.prisma.student.findUnique({
      where: { student_id },
      include: { class: true },
    });

    const classCapacity = this.getClassCapacity(classDetails.class_size_id.class_size_id);

    if (classDetails.students.length >= classCapacity) {
      throw new HttpException('Class is full', HttpStatus.BAD_REQUEST);
    }

    if (this.hasScheduleConflict(studentDetails, classDetails)) {
      throw new HttpException('Schedule conflict detected', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.student.update({
      where: { student_id },
      data: {
        class_id,
        enrolled_date: new Date(),
      },
    });

    const updatedClassDetails = await this.prisma.class.update({
      where: { class_id },
      data: { updated_date: new Date() },
      include: { students: true },
    });

    return {
      message: 'Student successfully assigned to class',
      classRoster: updatedClassDetails.students,
    };
  }

  // Added the missing method for retrieving class assignments
  async getClassAssignments(classId: string) {
    const classAssignments = await this.prisma.class.findUnique({
      where: { class_id: classId },
      include: { students: true },
    });

    if (!classAssignments) {
      throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
    }

    return classAssignments;
  }

  private getClassCapacity(class_size_id: string): number {
    switch (class_size_id) {
      case 'INDIVIDUAL':
        return ClassSize.INDIVIDUAL;
      case 'GROUP_2_4':
        return ClassSize.GROUP_2_4;
      case 'GROUP_5_8':
        return ClassSize.GROUP_5_8;
      case 'GROUP_9_12':
        return ClassSize.GROUP_9_12;
      default:
        return 0;
    }
  }

  private hasScheduleConflict(studentDetails: any, classDetails: any): boolean {
    // TODO: Implement logic to check if the student's enrolled classes conflict with the new class's schedule
    return false; // Placeholder
  }
}

