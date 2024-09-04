import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  async getCardsByUserEmail(email: string) {
    // Debugging logs to check email and data retrieved
    console.log(`Fetching cards for email: ${email}`);

    const decks = await this.prisma.memoDeck.findMany({
      where: {
        user: {
          email: email,
        },
      },
      include: {
        MemoCard: true,
      },
    });

    console.log('Decks retrieved:', decks); // Log retrieved data

    return {
      decks: decks.map(deck => ({
        id: deck.deck_id,
        name: deck.deck_name,
        cards: deck.MemoCard.map(card => ({
          id: card.card_id,
          front: card.question,
          back: card.answer,
        })),
      })),
    };
  }
}

