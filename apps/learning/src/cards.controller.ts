import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { CardsService } from './cards.service';
import { JwtGuard } from 'apps/gateway/src/auth/guards/jwt-auth.guard';

@Controller('user-cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(JwtGuard)
  @Get('/')
  async getAllCards(@Req() req) {
    console.log('JWT Payload:', req.user); // Log to see if `email` is present
    const userEmail = req.user.email;
    const userData = await this.cardsService.getCardsByUserEmail(userEmail);

    if (!userData || !userData.Deck || !userData.UserCard) {
      return { decks: [] }; // Return an empty array if no decks or user cards are found
    }

    // Group cards by deck
    const groupedCards = userData.Deck.map((deck) => ({
      id: deck.deck_id,
      name: deck.deck_description,
      cards: userData.UserCard.filter((card) => card.user_id === deck.user_id).map((card) => ({
        id: card.user_card_id,
        question: card.question,
        answer: card.answer,
        example: card.example,
      })),
    }));

    return { decks: groupedCards };
  }
}
