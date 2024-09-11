import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    PrismaService,
    {
      provide: 'PRISMA_CLIENT',
      useFactory: (configService: ConfigService) => {
        return new PrismaClient({
          datasources: {
            db: {
              url: configService.get('DATABASE_URL'),
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}