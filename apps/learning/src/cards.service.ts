import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCardsByUser(userEmail: string) {
    const userCards = await this.prisma.userCardTest.findMany({
      where: { user: { user_email: userEmail } },
      include: {
        deck: true, // Include deck information
      },
    });

    const groupedCards = userCards.reduce((acc, card) => {
      const deckId = card.deck?.deck_id;
      if (!deckId) return acc;

      if (!acc[deckId]) {
        acc[deckId] = {
          id: deckId,
          name: card.deck.deck_description || 'No Description', 
          cards: [],
        };
      }
      acc[deckId].cards.push({
        id: card.user_card_id,
        front: card.question,
        back: card.answer,
      });
      return acc;
    }, {});

    return {
      decks: Object.values(groupedCards),
    };
  }
}




