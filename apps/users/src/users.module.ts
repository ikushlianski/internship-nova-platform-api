import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaModule } from 'apps/users/src/prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersServiceListener } from './users.service.listener';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: new ConfigService().get('USER_SERVICE_HOST'),
          port: new ConfigService().get('USER_SERVICE_PORT'),
        },
      },
    ]),
  ],
  providers: [UsersService, UsersServiceListener],
  exports: [UsersService],
})
export class UsersModule {}




