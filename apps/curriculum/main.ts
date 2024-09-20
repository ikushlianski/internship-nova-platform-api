import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { CurriculumModule } from './curriculum.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CurriculumModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('CURRICULUM_SERVICE_PORT'),
    },
  });

  await app.listen();
}

bootstrap();
