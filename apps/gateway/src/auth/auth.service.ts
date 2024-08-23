import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOrCreateUser({ email });
    const payload = { email: user.email, sub: user.id };
    user.accessToken = this.jwtService.sign(payload);
    return user;
  }
}



