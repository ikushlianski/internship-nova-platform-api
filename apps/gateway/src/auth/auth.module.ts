import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './guards/google-oauth.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtGuardStrategy } from './guards/jwt-auth.strategy';
import { JwtGuard } from './guards/jwt-auth.guard';
import { EnvironmentService } from '../environment/environment.service';
import { SERVICE_NAMES } from '../service-names';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PrismaService } from 'apps/prisma/prisma.service';

@Module({
  imports: [
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
    PrismaService,
    JwtGuardStrategy,
    JwtGuard,
    GoogleStrategy,
    EnvironmentService,
    {
      provide: SERVICE_NAMES.USERS_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.TCP,
          options: {
            host: configService.get('USERS_SERVICE_HOST'),
            port: configService.get('USERS_SERVICE_PORT'),
          },
        });
      },
    },
  ],
})
export class AuthModule {}
