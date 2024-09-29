import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { RabbitMQ } from 'apps/shared-logic/src/RabbitMQ/rabbitmq.enums';

import { MeService } from './me.service';

@Controller('/me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @MessagePattern(RabbitMQ.GET_USER)
  handleMessage(message: any) {
    return this.meService.getUser(message.email);
  }
}
