import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';
import { MentorsService } from './mentros.service';


@Controller('mentors')
export class MentorsController {
  constructor(private readonly mentorsService: MentorsService) { }

  @MessagePattern({ cmd: 'create_mentor' })
  async handleFindOrCreateMentor(@Payload() userDto: ParsedUserData) {
    return "create mentor"
  }

  @MessagePattern({ cmd: 'get_mentor' })
  async handleGetMentorByID(@Payload() id: string) {
  return "get mentor"
  }

  @MessagePattern({ cmd: 'get_all_mentors' })
  async handleGetAllMentors() {
   return this.mentorsService.getAllMentors();
  }
}
