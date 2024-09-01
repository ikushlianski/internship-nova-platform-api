import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppEnvironment } from './environment.types';
import * as fs from 'fs';

@Injectable()
export class EnvironmentService {
  constructor(private readonly configService: ConfigService) {}

  isDevelopment(appEnv?: string): boolean {
    const environment = appEnv || this.configService.get<string>('APP_ENV');
    const hasDevEnvFile = fs.existsSync('.env.development.local');

    // Check for a custom APP_ENV variable using the enum
    return environment === AppEnvironment.Dev || hasDevEnvFile;
  }

 
}

