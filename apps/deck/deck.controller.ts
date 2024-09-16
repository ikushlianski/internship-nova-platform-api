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

@Controller('decks')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  // Get all decks for a specific user by email
  @UseGuards(JwtGuard)
  @Get()
  async getUserDecks(@Request() req) {
    const user = req.user;
    return this.deckService.getUserDecks(user);
  }

  // Create a new deck for the user by email
  @UseGuards(JwtGuard)
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

  // Modify a deck by user email and deck ID
  @UseGuards(JwtGuard)
  @Patch(':deck_id')
  async modifyDeck(
    @Request() req,
    @Param('deck_id') deck_id: string,
    @Body('deck_description') deck_description: string,
    @Body('lessons') lessons: LessonCard[],
  ): Promise<Deck> {
    const user = req.user;
    return this.deckService.updateDeck(user, deck_id, deck_description, lessons);
  }

  // Remove a deck by user email and deck ID
  @UseGuards(JwtGuard)
  @Delete(':deck_id')
  @HttpCode(204)
  async removeDeck(@Request() req, @Param('deck_id') deck_id: string): Promise<void> {
    const user = req.user;
    await this.deckService.deleteDeck(user, deck_id);
  }
}
