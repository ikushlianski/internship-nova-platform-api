import { Controller, Get, Post, Req, Res, UseGuards, Body } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { CardsService } from './cards.service';
import { Response } from 'express';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(JwtGuard)
  @Get()
  async getUserCards(@Req() req: any) {
    const user = req.user;
    return this.cardsService.getCardsByUserEmail(user.email);
  }

  @Post('test')
  async getTestCards(@Res() res: Response) {
    const testData = {
      "decks": [
        {
          "id": "deck1",
          "name": "Deck 1",
          "cards": [
            {
              "id": "card1",
              "front": "Card 1 Front",
              "back": "Card 1 Back"
            },
            {
              "id": "card2",
              "front": "Card 2 Front",
              "back": "Card 2 Back"
            }
          ]
        },
        {
          "id": "deck2",
          "name": "Deck 2",
          "cards": [
            {
              "id": "card3",
              "front": "Card 3 Front",
              "back": "Card 3 Back"
            }
          ]
        }
      ]
    };

    return res.json(testData);
  }
}

