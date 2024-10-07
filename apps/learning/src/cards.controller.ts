import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enum';
import { CardsService } from './cards.service';




@Controller('user_cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @MessagePattern(RabbitMQ.TEST_MESSAGE)
  handleMessage(message: any) {
    console.log('Received message:', message);
    return { success: true };
  }

  @MessagePattern({ cmd: RabbitMQ.GET_CARDS_BY_USER_EMAIL_COMMAND })
  async handleGetCardsByUserEmail(userEmail: string) {
    return this.cardsService.getCardsByUserEmail(userEmail);
  }
}