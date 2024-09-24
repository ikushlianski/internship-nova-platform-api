// src/class-assignment/class-assignment.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ClassService } from './class.service';
import { CurriculumPrismaModule } from './prisma/prisma.module';



@Module({
  imports: [CurriculumPrismaModule],
  providers: [ClassService, PrismaService], // Ensure PrismaService is injected
})
export class ClassModule {}

