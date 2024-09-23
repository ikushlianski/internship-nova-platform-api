import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { LearningPrismaModule } from './prisma/prisma.module';




@Module({
  imports: [LearningPrismaModule],
  providers: [CardsService],
})
export class LearningModule {}