import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { LearningPrismaModule } from './prisma/prisma.module';




@Module({
  imports: [LearningPrismaModule],
  controllers: [CardsController],
  providers: [CardsService],
})
export class LearningModule {}