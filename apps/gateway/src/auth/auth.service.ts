import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { ParsedUserData } from './auth.types';
import { SERVICE_NAMES } from '../service-names';

@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private readonly client: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(userDto: ParsedUserData) {
    return this.client.send({ cmd: 'create_user' }, userDto);
  }

  async findUserByEmail(email: string) {
    return this.client.send({ cmd: 'find_user_by_email' }, email);
  }

  generateJwtToken(user: ParsedUserData) {
    const payload = {
      email: user.user_email,
      first_name: user.first_name,
      last_name: user.last_name,
    };
    const jwt = this.jwtService.sign(payload, { expiresIn: '30d' });
    return { jwt };
  }

  parseLoginRequestState(state: string) {
    return Object.fromEntries(
      decodeURIComponent(state)
        .split('&')
        .map((pair) => pair.split('=')),
    );
  }
}
