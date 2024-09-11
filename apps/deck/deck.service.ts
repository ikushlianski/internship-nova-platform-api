import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'apps/users/src/prisma/prisma.service';
import { Deck } from '@prisma/client';

@Injectable()
export class DeckService {
  constructor(private prisma: PrismaService) {}

  // Get all decks for a user by user email
  async getUserDecks(userEmail: string): Promise<Deck[]> {
    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${userEmail} not found`);
    }

    return this.prisma.deck.findMany({
      where: { userEmail },
    });
  }

  // Create a new deck for a user by user email
  async createDeck(userEmail: string, title: string): Promise<Deck> {
    const user = await this.prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${userEmail} not found`);
    }

    return this.prisma.deck.create({
      data: {
        title,
        userEmail, 
      },
    });
  }
}
