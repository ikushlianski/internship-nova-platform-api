import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';

@Injectable()
export class UsersServiceListener {}
