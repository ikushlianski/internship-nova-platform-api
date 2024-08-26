import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';
import { ParsedUserData } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
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


  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOrCreateUser({ email });
    const payload = { email: user.email, sub: user.id };
    user.accessToken = this.jwtService.sign(payload);
    return user;
  }
}



