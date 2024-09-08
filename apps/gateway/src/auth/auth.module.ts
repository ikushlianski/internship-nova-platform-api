import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from '../auth/guards/google-oauth.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtGuardStrategy } from './guards/jwt-auth.strategy';
import { JwtGuard } from './guards/jwt-auth.guard';
import { EnvironmentService } from '../environment/environment.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
