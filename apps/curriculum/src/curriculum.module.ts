import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';
import { PrismaModule } from 'apps/shared-logic/prisma/prisma.module';

@Module({
  controllers: [CurriculumController],
  providers: [CurriculumService],
  imports: [PrismaModule],
})
export class CurriculumModule {}
