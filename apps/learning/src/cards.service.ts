import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserSchema } from 'apps/shared-logic/src/dto/dto';
import { User } from 'prisma/prisma-client';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  // Expect only the user email (target user)
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

  async findOrCreateLeadUser(newLeadUser: UserSchema): Promise<User> {
    let user = await this.prisma.user.findUnique({
      where: { user_email: newLeadUser.user_email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          ...newLeadUser,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          deleted: false,
          user_roles: {
            create: [
              { role: { create: { role_id: "LEAD", role_name: "Lead" } } },
            ]
          }
        },
      });
    }
    return user;
  }
}












