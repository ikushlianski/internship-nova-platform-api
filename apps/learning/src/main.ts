import { NestFactory } from '@nestjs/core';
import { LearningModule } from './learning.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const port = configService.get('LEARNING_SERVICE_PORT');
  
  console.log('LEARNING_SERVICE_PORT:', port);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LearningModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',  // Listen on all available interfaces
        port: port,  
      },
    },
  );

  await app.listen();
}

bootstrap();

