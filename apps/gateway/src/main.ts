import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GatewayModule } from './gateway.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: app.get(ConfigService).get('DEFAULT_API_VERSION'),
  });

  const gatewayPort = app.get(ConfigService).get('GATEWAY_PORT');

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Nova Platform API')
    .setDescription('API powering the ecosystem of Nova educational platform')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(gatewayPort);
}

bootstrap();
