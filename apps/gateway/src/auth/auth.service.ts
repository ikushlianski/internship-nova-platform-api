import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ParsedUserData } from './auth.types';
import { PrismaService } from '../prisma/prisma.service';  // Using Prisma ORM
import { User } from '@prisma/client'; // Importing User Model
import * as cookie from 'cookie';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async generateJwtToken(user: ParsedUserData) {
    const appDomain = process.env.APP_DOMAIN;

    if (!user) {
      throw new Error('User not found');
    }

    let dbUser = await this.prisma.user.findUnique({
      where: { email: user.email },
      include: { roles: true },
    });

    if (!dbUser) {
      dbUser = await this.prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          lastLoginTime: new Date(),
          privacyPolicyAccepted: false,  
          roles: {
            connectOrCreate: {
              where: { name: 'Spectator' },
              create: { name: 'Spectator' },
            },
          },
        },
        include: { roles: true },
      });

      throw new UnauthorizedException('User must accept the privacy policy.');
    }

    if (!dbUser.privacyPolicyAccepted) {
      throw new UnauthorizedException('User must accept the privacy policy.');
    }

    await this.prisma.user.update({
      where: { email: dbUser.email },
      data: {
        lastLoginTime: new Date(),
      },
    });
    

    const payload = {
      email: user.email,
      name: user.name,
      roles: dbUser.roles.map(role => role.name) 
    };

    const jwt = this.jwtService.sign(payload, {
      expiresIn: '30d',
    });

    const jwtCookie = cookie.serialize('jwt', jwt, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60, 
      domain: appDomain,
      path: '/',
      secure: true,
    });


    return { jwt, jwtCookie};
  }
}
