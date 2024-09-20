import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ClassModule } from './class.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClassModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'curriculum',  
        port:  new ConfigService().get('LEARNING_SERVICE_PORT'),
      },
    },
  );

  await app.listen();
}

bootstrap();

