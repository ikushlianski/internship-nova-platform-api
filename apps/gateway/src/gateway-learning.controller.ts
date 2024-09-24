import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtGuard } from './auth/guards/jwt-auth.guard'; // Ensure correct path to JwtGuard
import { SERVICE_NAMES } from './service-names'; // Service name constants
import { Inject } from '@nestjs/common';
import { RabbitMQ } from '../../shared-logic/src/RabbitMQ/rabbitmq.enums';

@Controller('learning')
export class LearningRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.LEARNING_SERVICE) private client: ClientProxy, // Inject the learning service proxy
  ) {}

  @UseGuards(JwtGuard)
  @Get('test_RMQ')
  sendMessage() {
    const message = { text: 'Message from LEARNING_MS' };
    return this.client.send(RabbitMQ.TEST_MESSAGE, message);
  }

  @UseGuards(JwtGuard)
  @Get('user-cards/:email')
  async getAllCards(@Param('email') userEmail: string) {
    // Send request to the learning service to get the cards by user email
    return this.client.send({ cmd: RabbitMQ.GET_CARDS_BY_USER_EMAIL_COMMAND }, userEmail);
  }
}