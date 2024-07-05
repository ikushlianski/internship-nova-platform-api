import { Module } from '@nestjs/common';
import { ClientAppController } from './client-app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SERVICE_NAMES } from './service-names';
import { ClientAppService } from './client-app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
  controllers: [ClientAppController],
  providers: [
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
    ClientAppService,
  ],
})
export class ClientAppModule {}
