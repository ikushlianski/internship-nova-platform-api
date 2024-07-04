import { NestFactory } from '@nestjs/core';
import { ClientAppModule } from './client-app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ClientAppModule);
  const clientAppPort = app.get(ConfigService).get('CLIENT_APP_PORT');
  console.log(clientAppPort);

  await app.listen(clientAppPort);
}

bootstrap();
