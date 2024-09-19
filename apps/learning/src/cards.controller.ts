import { Controller, Get, Param } from '@nestjs/common';
import { CardsService } from './cards.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user-cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get('/:email')
  async getAllCards(@Param('email') userEmail: string) {
    const userData = await this.cardsService.getCardsByUserEmail(userEmail);

    // Ensure that userDecks and userCard fields are present
    if (!userData || !userData.userDecks || !userData.userCard) {
      return { userDecks: [], userCard: [] };
    }

    // Return only the necessary fields
    return {
      userDecks: userData.userDecks.map(deck => ({
        deck_id: deck.deck_id,
        user_id: deck.user_id,
        deck_description: deck.deck_description,
      })),
      userCard: userData.userCard.map(card => ({
        user_card_id: card.user_card_id,
        user_id: card.user_id,
        question: card.question,
        answer: card.answer,
        example: card.example,
      })),
    };
  }

  @MessagePattern({ cmd: 'get_cards_by_user_email' })
  async handleGetCardsByUserEmail(userEmail: string) {
    return this.cardsService.getCardsByUserEmail(userEmail);
  }
}


