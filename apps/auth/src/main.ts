import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const authAppPort = app.get(ConfigService).get('AUTH_SERVICE_PORT');
  console.log(authAppPort);

  await app.listen(authAppPort);
}

bootstrap();
