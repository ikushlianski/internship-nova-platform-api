import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQ_Queue } from '../../shared-logic/src/RabbitMQ/rabbitmq.enums';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [ process.env.RABBITMQ_URL],
        queue: RMQ_Queue.USERS_QUEUE,
        queueOptions: {
          durable: false
        },
      },
    },
  );
  
  await app.listen();
}

bootstrap();
