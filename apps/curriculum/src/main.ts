import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ClassModule } from './class.module';
import { RMQ_Queue } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enum';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClassModule,
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

