import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ClassAssignmentModule } from './class-assignment.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClassAssignmentModule,
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

