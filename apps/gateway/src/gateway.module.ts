import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt-auth.guard';
import { UsersRoutesController } from './gateway-users.controller';
import { PrismaModule } from 'apps/learning/src/prisma/prisma.module';
import { LearningRoutesController } from './gateway-learning.controller';
import { CurriculumService } from 'apps/curriculum/curriculum.service';
import { CurriculumRoutesController } from './gateway-curriculum.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    AuthModule,
    PrismaModule, 
  ],
  controllers: [UsersRoutesController, LearningRoutesController, CurriculumRoutesController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: SERVICE_NAMES.USERS_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('USER_SERVICE_HOST'),
            port: configService.get('USER_SERVICE_PORT'),
          },
        });
      },
    },
    {
      provide: SERVICE_NAMES.CURRICULUM_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('CURRICULUM_SERVICE_HOST'),
            port: configService.get('CURRICULUM_SERVICE_PORT'),
          },
        });
      },
    },
    {
      provide: SERVICE_NAMES.LEARNING_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('LEARNING_SERVICE_HOST'),
            port: configService.get('LEARNING_SERVICE_PORT'),
          },
        });
      },
    },
  ],
})
export class GatewayModule {}
