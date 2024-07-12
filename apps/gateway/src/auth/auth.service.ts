import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ParsedUserData } from './auth.types';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(user: ParsedUserData) {
    if (!user) {
      throw new Error('User not found');
    }

    //    .... your business logic

    //   .... add whatever payload you want to have
    const payload = {
      email: user.email,
      name: user.name,
    };

    const jwt = this.jwtService.sign(payload, {
      expiresIn: '30d',
    });

    return { jwt };
  }
}
