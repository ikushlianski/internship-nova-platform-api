import { Module } from '@nestjs/common';
import { CurriculumService} from './curriculum.service';
import { CurriculumController} from './curriculum.controller';
import { PrismaModule } from 'apps/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { PublicGuard } from 'apps/guards/public.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [CurriculumController],
  providers: [
    CurriculumService,
    {
      provide: APP_GUARD,
      useClass: PublicGuard,
    },
  ],
  imports: [ConfigModule.forRoot(),PrismaModule],
})
export class CurriculumModule {}