import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { JwtGuard } from 'apps/gateway/src/auth/guards/jwt-auth.guard';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(JwtGuard)
  @Get('/')
  async getAllCards(@Req() req) {
    const userEmail = req.user.email;

    const userData = await this.cardsService.getCardsByUserEmail(userEmail);

    // Group cards by deck
    const groupedCards = userData.Deck.map((deck) => ({
      id: deck.deck_id,
      name: deck.deck_description,
      cards: deck.Card.map((card) => ({
        id: card.card_id,
        question: card.question,
        answer: card.answer,
        example: card.example,
      })),
    }));

    return { decks: groupedCards };
  }
}







