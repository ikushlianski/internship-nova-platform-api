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
    const user = await this.client
      .send('find_or_create_user', userDto)
      .toPromise();

    return user;
  }

  async generateJwtToken(user: ParsedUserData) {
    const payload = { email: user.user_email, name: user.name };
    const jwt = this.jwtService.sign(payload, { expiresIn: '30d' });
    return { jwt };
  }
}
