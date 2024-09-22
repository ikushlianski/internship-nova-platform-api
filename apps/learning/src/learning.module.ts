import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { PrismaModule } from './prisma/prisma.module';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';

@Module({
  imports: [PrismaModule],
  controllers: [CardsController, LeadController],
  providers: [CardsService, LeadService],
})
export class LearningModule {}
