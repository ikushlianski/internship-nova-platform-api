import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { AuthModule } from './auth/auth.module';
import { UsersRoutesController } from './gateway/users-routes.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    AuthModule,
  ],
  controllers: [UsersRoutesController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: SERVICE_NAMES.USERS_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log('IIIIIIIIII', configService.get('USER_SERVICE_PORT'));

        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: 'users', // name of microservice in docker-compose.yml
            port: configService.get('USER_SERVICE_PORT'),
          },
        });
      },
    },
  ],
})
export class ClientAppModule {}
