import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';





@Module({
  imports: [LearningModule],
  providers: [CardsService],
})
export class LearningModule {}