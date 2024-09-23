import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ClassAssignmentModule } from './class-assignment.module';
import { RMQ_Queue } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClassAssignmentModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [ process.env.RABBITMQ_URL],
        queue: RMQ_Queue.CURRICULUM_QUEUE,
        queueOptions: {
          durable: false
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
