import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Deck, LessonCard, User } from '@prisma/client';

@Injectable()
export class DeckService {
  constructor(private prisma: PrismaService) {}

  async getUserDecks(user: User): Promise<Deck[]> {
    const userDetail = await this.prisma.user.findUnique({
      where: { user_email: user.user_email },
    });

    if (!userDetail) {
      throw new NotFoundException(`User with email ${user.user_email} not found`);
    }

    return this.prisma.deck.findMany({
      where: { user_id: user.user_email},
    });
  }

  async createDeck(user: User, deckDescription: string, lessons: LessonCard[]): Promise<Deck> {
    const userDetail = await this.prisma.user.findUnique({
      where: { user_email: user.user_email},
    });

    if (!userDetail) {
      throw new NotFoundException(`User with email ${user.user_email} not found`);
    }

    return this.prisma.deck.create({
      data: {
        deck_id: '',
        user_id: user.user_email,  
        deckDescription,
        Card: {             
          create: lessons,
        },
      },
    });
  }
}
