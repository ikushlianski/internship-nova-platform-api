import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { PrismaModule } from '../../shared-logic/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CardsController],
  providers: [CardsService],
})
export class LearningModule {}
