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

  async findOrCreateUser(userDto: ParsedUserData) {
    const user = await this.client.send({ cmd: 'find_or_create_user' }, userDto).toPromise();

    return user;
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
