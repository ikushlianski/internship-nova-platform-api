import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
  HttpException,
  Headers,
  Inject,
  Query,
} from '@nestjs/common';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';
import { AuthResponse, ParsedUserData } from './auth.types';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppEnvironment } from '../environment/environment.types';

const controllerName = 'auth';

@ApiTags(controllerName)
@Controller(controllerName)
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Public()
  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(
    @Req() req: Request,
    @Res() res: Response,
    @Query('state') state: string,
  ) {
    const stateFromLoginRequest = Object.fromEntries([
      decodeURIComponent(state).split('='),
    ]);

    /* stateFromLoginRequest = { ssr: 'true' or 'false' } */

    let token: { jwt: string };

    try {
      token = await this.authService.generateJwtToken(
        req.user as ParsedUserData,
      );
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ success: false, message: err.message });
    }

    const frontendUrl = this.configService.get<string>('FRONTEND_URL');

    if (stateFromLoginRequest.ssr === 'true') {
      // For SSR apps, redirect with the token in the query parameter
      return res.redirect(`${frontendUrl}/oauth?token=${token.jwt}`);
    } else {
      // For non-SSR apps, set the cookie directly
      res.cookie('googleToken', token.jwt, {
        httpOnly: true,
        secure: true, // Adjust as per environment
        path: '/',
        sameSite: 'lax',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
        domain: this.configService.get<string>('APP_DOMAIN'), // Use the environment variable
      });

      // todo for now redirects to frontend main page, but in the future consider maintaining the state of where the user originally wanted to navigate before being required to log in
      return res.redirect(frontendUrl);
    }
  }

  @ApiOperation({ summary: 'Generate token' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Token generated successfully.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiBody({ type: ParsedUserData })
  @Public()
  @Post('token')
  async getTestToken(
    @Res() res: Response,
    @Body() body: ParsedUserData,
  ): Promise<Response<AuthResponse>> {
    console.log(
      "this.configService.get<string>('APP_ENV')",
      this.configService.get<string>('APP_ENV'),
    );
    if (this.configService.get<string>('APP_ENV') !== AppEnvironment.Prod) {
      try {
        const token = await this.authService.generateJwtToken(body);

        res.cookie('googleToken', token.jwt, {
          httpOnly: true,
          secure: false,
          path: '/',
          sameSite: 'none',
          domain: this.configService.get<string>('APP_DOMAIN'),
        });

        return res.send({ success: true, token: token.jwt });
      } catch (err) {
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send({ success: false, message: err.message });
      }
    }

    return res.status(HttpStatus.FORBIDDEN).send('Forbidden');
  }
}
