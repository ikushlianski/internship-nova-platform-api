import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCardsByUserEmail(userEmail: string) {
    const user = await this.prisma.user.findUnique({
      where: { user_email: userEmail },
      include: {
        userDecks: true,
        userCard: true,
      },
    });

    if (!user) {
      return { userDecks: [], userCard: [] };
    }

    return {
      userDecks: user.userDecks.map(deck => ({
        deck_id: deck.deck_id,
        user_id: deck.user_id,
        deck_description: deck.deck_description,
      })),
      userCard: user.userCard.map(card => ({
        user_card_id: card.user_card_id,
        user_id: card.user_id,
        question: card.question,
        answer: card.answer,
        example: card.example,
      })),
    };
  }
}












