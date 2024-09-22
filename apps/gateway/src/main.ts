import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { VersioningType } from '@nestjs/common';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: app.get(ConfigService).get('DEFAULT_API_VERSION'),
  });

  const gatewayPort = app.get(ConfigService).get('GATEWAY_PORT');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@rabbitmq:${process.env.RABBITMQ_PORT}`,
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Nova Platform API')
    .setDescription('API powering the ecosystem of Nova educational platform')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(gatewayPort);
}

bootstrap();
