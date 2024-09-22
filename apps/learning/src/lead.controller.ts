import { Controller} from '@nestjs/common';
import { CardsService } from './cards.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserSchema } from 'apps/shared-logic/src/dto/dto';

@Controller('lead')
export class LeadController {
  constructor(private readonly cardsService: CardsService) {}

  @MessagePattern({ cmd: 'get_cards_by_user_email' })
  async handleGetCardsByUserEmail(userEmail: string) {
    return this.cardsService.getCardsByUserEmail(userEmail);
  }

  @MessagePattern({ cmd: 'create_lead_user' })
  async findOrCreateLeadUser(@Payload() newLeadUser: UserSchema) {
    const leadUser = this.cardsService.findOrCreateLeadUser(newLeadUser);
    return leadUser;
  }
}
