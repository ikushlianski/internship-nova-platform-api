// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get<number>('DATABASE_PORT')
      )
      console.log(configService.get<number>('POSTGRES_USER')
      )
      console.log(configService.get<number>('POSTGRES_PASSWORD')
      )
      console.log(configService.get<number>('POSTGRES_DB')
      )
      
        return { type: 'postgres',
          host: 'database',
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('POSTGRES_USER'),
          password: configService.get<string>('POSTGRES_PASSWORD'),
          database: configService.get<string>('POSTGRES_DB'),
          entities: [User],
          synchronize: true}        
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]), // Add this line
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService if needed in other modules
})
export class UsersModule {}


