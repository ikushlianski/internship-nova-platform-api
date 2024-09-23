import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaModule } from 'apps/users/src/prisma/prisma.module';
import { UsersController } from './users.controller';
import { StudentsController } from './student/students.controller';


@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
  controllers: [UsersController,StudentsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
