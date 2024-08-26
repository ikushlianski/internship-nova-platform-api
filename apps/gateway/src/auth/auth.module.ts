// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { UsersModule } from '../../../users/src/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtGuardStrategy } from './guards/jwt-auth.strategy';
import { JwtGuard } from './guards/jwt-auth.guard';
import { EnvironmentService } from '../environment/environment.service';

@Module({
  imports: [
    UsersModule, // Import UsersModule here
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '3d',
        },
        global: true,
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtGuardStrategy,
    JwtGuard,
    GoogleStrategy,
    EnvironmentService,
  ],
})
export class AuthModule {}





