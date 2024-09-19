import { Controller, Get, Param } from '@nestjs/common';
import { CardsService } from './cards.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user-cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @MessagePattern({ cmd: 'get_cards_by_user_email' })
  async handleGetCardsByUserEmail(userEmail: string) {
    return this.cardsService.getCardsByUserEmail(userEmail);
  }
}


