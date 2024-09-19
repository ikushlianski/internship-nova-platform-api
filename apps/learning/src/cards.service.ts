import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCardsByUserEmail(userEmail: string) {
    console.log('Fetching cards for user email:', userEmail);
    const user = await this.prisma.user.findUnique({
      where: { user_email: userEmail },
      include: {
        userDecks: true,
        userCard: true,
      },
    });

    // Return only the relevant parts of the user object
    if (user) {
      return {
        userDecks: user.userDecks,
        userCard: user.userCard,
      };
    }

    // Return empty arrays if no user is found
    return {
      userDecks: [],
      userCard: [],
    };
  }
}













