import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt-auth.guard';
import { MeRoutesController, UsersRoutesController } from './gateway-users.controller';
import { PrismaModule } from 'apps/learning/src/prisma/prisma.module';
import { LearningRoutesController } from './gateway-learning.controller';
import * as process from 'node:process';
import { RMQ_Queue } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

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
          urls: [process.env.RABBITMQ_URL],
          queue: RMQ_Queue.USERS_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: SERVICE_NAMES.LEARNING_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: RMQ_Queue.LEARNING_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [UsersRoutesController, LearningRoutesController, MeRoutesController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class GatewayModule {}
