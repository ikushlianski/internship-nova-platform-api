import { NestFactory } from '@nestjs/core';
import { ClientAppModule } from './client-app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ClientAppModule);
  const clientAppPort = app.get(ConfigService).get('CLIENT_APP_PORT');

  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());

  await app.listen(clientAppPort);
}

bootstrap();
