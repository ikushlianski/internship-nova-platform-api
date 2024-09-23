import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt-auth.guard';
import { UsersRoutesController } from './gateway-users.controller';
import { PrismaModule } from 'apps/learning/src/prisma/prisma.module';
import { LearningRoutesController } from './gateway-learning.controller';
import * as process from 'node:process';
import { RMQ_Queue } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';
import { CurriculumRoutesController } from './gateway-curriculum.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    AuthModule,
    PrismaModule,
    ClientsModule.register([
      {
        name: SERVICE_NAMES.USERS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [ process.env.RABBITMQ_URL ],
          queue: RMQ_Queue.USERS_QUEUE,
          queueOptions: {
            durable: false
          },
        },
      },
      {
        name: SERVICE_NAMES.LEARNING_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [ process.env.RABBITMQ_URL ],
          queue: RMQ_Queue.LEARNING_QUEUE,
          queueOptions: {
            durable: false
          },
        },
      },
    ])
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
            host: configService.get('USERS_SERVICE_HOST'),
            port: configService.get('USERS_SERVICE_PORT'),
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
