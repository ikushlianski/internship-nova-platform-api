import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt-auth.guard';
import { UsersRoutesController } from './gateway-users.controller';
import { CurriculumService } from 'apps/curriculum/curriculum.service';
import { PrismaModule } from 'apps/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [UsersRoutesController],
  providers: [
    CurriculumService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: SERVICE_NAMES.USERS_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('USER_SERVICE_HOST'), // name of microservice in docker-compose.yml
            port: configService.get('USER_SERVICE_PORT'),
          },
        });
      },
    },
  ],
})
export class GatewayModule {}
