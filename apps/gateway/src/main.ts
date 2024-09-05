import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GatewayModule } from './gateway.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule, {
    logger: ['error', 'log'],
  });
  const gatewayPort = await app.get(ConfigService).get('GATEWAY_PORT');
  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Nova Platform API')
    .setDescription('API powering the ecosystem of Nova educational platform')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  app.enableCors({
    origin: /^(http:\/\/localhost|http:\/\/127\.0\.0\.1)(:\d+)?$/,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(gatewayPort || 3000);

  Logger.log(
    `🚀 Application GATEWAY is running on: http://localhost:${gatewayPort}`
  );
}

bootstrap();
