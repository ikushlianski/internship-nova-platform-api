import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    // PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
//   controllers: [LearningController],
//   providers: [LearningService],
//   exports: [LearningService],
})
export class LearningModule {}
