import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const configService = app.get(ConfigService);
  const gatewayPort = configService.get('GATEWAY_PORT');

  app.setGlobalPrefix('api/v1');
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


