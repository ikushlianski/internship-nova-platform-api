import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import { PrismaModule } from 'apps/users/src/prisma/prisma.module';
import { UsersController } from './users.controller';
import { StudentsController } from './student/students.controller';
import { StudentsService } from './student/students.service';
import { MentorsService } from './mentor/mentros.service';
import { MentorsController } from './mentor/mentors.controller';


@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
  controllers: [UsersController,StudentsController,MentorsController],
  providers: [UsersService,StudentsService,MentorsService],
  exports: [UsersService,StudentsService,MentorsService],
})
export class UsersModule {}
