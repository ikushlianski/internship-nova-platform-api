import { NestFactory } from '@nestjs/core';
import { LearningModule } from './cards.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQ_Queue } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enum';



async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LearningModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [ process.env.RABBITMQ_URL],
        queue: RMQ_Queue.LEARNING_QUEUE,
        queueOptions: {
          durable: false
        },
      },
    },
  );

  await app.listen();
}

bootstrap();