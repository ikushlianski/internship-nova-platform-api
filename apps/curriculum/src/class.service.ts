import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private readonly prisma: PrismaService) {}

  // Fetch all classes with assigned students
  async getClassesWithAssignedStudents() {
    return this.prisma.class.findMany({
      where: {
        deleted: false, // Exclude deleted classes
        start_date: { lte: new Date() }, // Only classes with a start date in the past or today
        students: { some: { deleted: false } }, // Ensure at least one student is assigned
      },
      orderBy: {
        start_date: 'desc', // Sort by start date descending
      },
      include: {
        students: {
          where: { deleted: false }, // Include non-deleted students
          select: {
            user: {
              select: {
                user_email: true,
                first_name: true,
                last_name: true,
              },
            },
            enrolled_date: true,
            student_nickname: true,
          },
        },
      },
    });
  }

  // Fetch specific class details by ID (add this method if you don’t have it already)
  async getClassDetails(classId: string) {
    return this.prisma.class.findUnique({
      where: { class_id: classId },
      include: {
        students: {
          select: {
            user: {
              select: {
                user_email: true,
                first_name: true,
                last_name: true,
              },
            },
            enrolled_date: true,
            student_nickname: true,
          },
        },
      },
    });
  }
}

