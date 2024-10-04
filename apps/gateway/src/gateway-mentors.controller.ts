import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ParsedUserData } from './auth/auth.types';
import { SERVICE_NAMES } from './service-names';


@Controller('mentors')
export class MentorsRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.USERS_SERVICE) private client: ClientProxy,
  ) { }

  @Get(':id')
  getMentortByID(@Param('id') id) {
    return this.client.send({ cmd: 'get_mentor' }, id);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createMentor(@Body() userDto: ParsedUserData) {
    return this.client.send({ cmd: 'create_mentor' }, userDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllMentors() {
    return this.client.send({ cmd: 'get_all_mentors' }, {});
  }
}
