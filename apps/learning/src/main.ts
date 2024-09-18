import { NestFactory } from '@nestjs/core';
import { LearningModule } from './cards.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LearningModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',  
        port:  new ConfigService().get('LEARNING_SERVICE_PORT'),
      },
    },
  );

  await app.listen();
}

bootstrap();

