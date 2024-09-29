import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaModule } from 'apps/users/src/prisma/prisma.module';
import { UsersController } from './users.controller';
import { MeController } from './me/me.controller';
import { MeService } from './me/me.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
  controllers: [UsersController, MeController],
  providers: [UsersService, MeService],
  exports: [UsersService],
})
export class UsersModule {}
