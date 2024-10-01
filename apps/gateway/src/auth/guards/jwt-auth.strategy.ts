import { Request } from 'express';
import { Injectable, Req } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtGuardStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtGuardStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    console.log('JWT validate fn: payload', payload);
    return payload;
  }

  private static extractJWT(@Req() req: Request): string | null {
    if (req.cookies && 'googleToken' in req.cookies) {
      console.log("cookie good");
      return req.cookies.googleToken;
    }

    return null;
  }
}
