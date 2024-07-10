import { NestFactory } from '@nestjs/core';
import { ClientAppModule } from './client-app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ClientAppModule);
  const clientAppPort = app.get(ConfigService).get('CLIENT_APP_PORT');

  app.setGlobalPrefix('api/v1');
  app.use(cookieParser());

  // const config = new DocumentBuilder()
  //   .setTitle('Nova Platform API')
  //   .setDescription('API powering the ecosystem of Nova educational platform')
  //   .setVersion('1.0')
  //   .build();
  //
  // const document = SwaggerModule.createDocument(app, config);
  //
  // SwaggerModule.setup('api', app, document);

  await app.listen(clientAppPort);
}

bootstrap();
