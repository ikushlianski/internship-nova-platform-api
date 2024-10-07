import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { VersioningType } from '@nestjs/common';
import { GatewayModule } from './gateway.module';
import * as process from 'node:process';

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

  // CORS configuration
  const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.QA1_URL,
    process.env.QA2_URL,
    process.env.PROD_URL,
  ].filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });

  await app.listen(gatewayPort);
}

bootstrap();
