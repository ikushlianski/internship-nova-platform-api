// src/class-assignment/class-assignment.module.ts
import { Module } from '@nestjs/common';
import { ClassAssignmentService } from './class-assignment.service';
import { ClassAssignmentController } from './class-assignment.controller';
import { PrismaService } from './prisma/prisma.service';
import { CurriculumPrismaModule } from './prisma/prisma.module';


@Module({
  imports: [CurriculumPrismaModule],
  controllers: [ClassAssignmentController],
  providers: [ClassAssignmentService, PrismaService],
})
export class ClassAssignmentModule {}
