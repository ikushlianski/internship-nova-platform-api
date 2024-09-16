import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCardsByUserEmail(userEmail: string) {
    console.log('Fetching cards for user email:', userEmail);
    return await this.prisma.user.findUnique({
      where: { user_email: userEmail }, 
      include: {
        Deck: { 
          include: {
            Card: true, 
          },
        },
        UserCard: true, 
      },
    });
  }
  
}







