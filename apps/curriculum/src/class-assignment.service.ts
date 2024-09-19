import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { StudentDto } from './assign-student.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class ClassAssignmentService {
  constructor(private readonly prisma: PrismaService) {}

  async assignStudentToClass(assignStudentDto: StudentDto) {
    const { student_id, class_id } = assignStudentDto;

    // Fetch class and student details
    const classDetails = await this.prisma.class.findUnique({
      where: { class_id },
      include: {
        students: true, // Include the students relation
        class_size_id: true, // Ensure this is correct
      },
    });

    const studentDetails = await this.prisma.student.findUnique({
      where: { student_id },
      include: { class: true },
    });

    // Check if the class has available slots
    const classCapacity = this.getClassCapacity(classDetails.class_size_id.class_size_id); // Access the class_size_id string
    if (classDetails.students.length >= classCapacity) {
      throw new HttpException('Class is full', HttpStatus.BAD_REQUEST);
    }

    // Check for schedule conflicts
    if (this.hasScheduleConflict(studentDetails, classDetails)) {
      throw new HttpException('Schedule conflict detected', HttpStatus.BAD_REQUEST);
    }

    // Assign student to the class
    await this.prisma.student.update({
      where: { student_id },
      data: {
        class_id,
        enrolled_date: new Date(),
      },
    });

    // Update class student count (optional step for real-time updates)
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

  // Get class capacity based on class size
  private getClassCapacity(class_size_id: string): number {
    switch (class_size_id) {
      case 'INDIVIDUAL':
        return 1;
      case 'GROUP_2_4':
        return 4;
      case 'GROUP_5_8':
        return 8;
      case 'GROUP_9_12':
        return 12;
      default:
        return 0;
    }
  }

  // Check for schedule conflicts
  private hasScheduleConflict(studentDetails: any, classDetails: any): boolean {
    // Implement logic to check if the student's enrolled classes conflict with the new class's schedule
    return false; // Placeholder, implement conflict detection logic
  }
}

