import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CardsService } from './cards.service';

@Controller('api/v1/cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getAllCards(@Req() req: Request, @Res() res: Response) {
    try {
      const userEmail = req.user.user_email;
      const cards = await this.cardsService.getAllCardsByUser(userEmail);
      return res.status(HttpStatus.OK).json(cards);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }
}




