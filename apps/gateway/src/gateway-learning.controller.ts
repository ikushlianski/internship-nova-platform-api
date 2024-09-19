import { Controller, ForbiddenException, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtGuard } from './auth/guards/jwt-auth.guard'; // Ensure correct path to JwtGuard
import { SERVICE_NAMES } from './service-names'; // Service name constants
import { Inject } from '@nestjs/common';

@Controller('learning')
export class LearningRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.LEARNING_SERVICE) private client: ClientProxy,  // Inject the learning service proxy
  ) {}

  @UseGuards(JwtGuard)
  @Get('user-cards/:email')
  async getAllCards(@Param('email') userEmail: string, @Req() req) {
    const tokenUserEmail = req.user.email;
    console.log('JWT Payload:', req.user); // Log to verify the payload

    // Ensure the email in the request matches the email in the JWT payload
    if (userEmail !== tokenUserEmail) {
      throw new ForbiddenException('You are not allowed to access these cards.');
    }

    // Send request to the learning service to get the cards by user email
    return this.client.send({ cmd: 'get_cards_by_user_email' }, userEmail);
  }
}
