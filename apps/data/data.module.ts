import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { PrismaModule } from 'apps/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { PublicGuard } from 'apps/guards/public.guard';

@Module({
  controllers: [DataController],
  providers: [
    DataService,
    {
      provide: APP_GUARD,
      useClass: PublicGuard,
    },
  ],
  imports: [PrismaModule],
})
export class DataModule {}
