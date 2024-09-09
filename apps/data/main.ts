import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { DataModule } from './data.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    DataModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'data',
        port: new ConfigService().get('DATA_SERVICE_PORT'),
      },
    },
  );

  await app.listen();
}

bootstrap();
