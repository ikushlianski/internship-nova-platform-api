import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaModule } from 'apps/gateway/src/prisma/prisma.module';
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
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RMQ_URL],  // RabbitMQ URL
          queue: 'user_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [UsersService, UsersServiceListener],  // Include listener
  exports: [UsersService],
})
export class UsersModule {}


