import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { DeckService } from './deck.service';
import { JwtGuard } from 'apps/gateway/src/auth/guards/jwt-auth.guard';
import { Deck, LessonCard } from '@prisma/client';
import { SERVICE_NAMES } from './service-names';

@Controller('decks')
@UseGuards(JwtGuard)
export class DeckController {
  constructor(
    //private readonly deckService: DeckService
    @Inject(SERVICE_NAMES.LEARNING_SERVICE) private client: ClientProxy,
  ) {}

  @Get()
  async getUserDecks(@Request() req) {
    const user = req.user;
    return this.deckService.getUserDecks(user);
  }

  @Post()
  @HttpCode(201)
  async createDeck(
    @Request() req,
    @Body('deck_description') deck_description: string,
    @Body('lessons') lessons: LessonCard[],
  ): Promise<Deck> {
    const user = req.user;
    return this.deckService.createDeck(user, deck_description, lessons);
  }
}
