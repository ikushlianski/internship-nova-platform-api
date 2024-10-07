import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';
import { PrismaModule } from 'apps/shared-logic/prisma/prisma.module';
import { ClassAssignmentService } from './class-assignment.service';
import { ClassAssignmentController } from './class-assignment.controller';

@Module({
  controllers: [CurriculumController, ClassAssignmentController],
  providers: [CurriculumService, ClassAssignmentService],
  imports: [PrismaModule],
})
export class CurriculumModule {}
