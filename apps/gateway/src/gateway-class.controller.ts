import { Controller, Post, Body, HttpException, HttpStatus, Get, Param, UseGuards, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtGuard } from './auth/guards/jwt-auth.guard'; // Adjust path as needed
import { SERVICE_NAMES } from './service-names';


@Controller('curriculum')
export class CurriculumRoutesController {
  constructor(
    @Inject(SERVICE_NAMES.CURRICULUM_SERVICE) private readonly curriculumService: ClientProxy, // Inject the curriculum service proxy
  ) {}

  // Route to get all classes
  @UseGuards(JwtGuard) // Use JwtGuard for authentication
  @Get('/classes')
  async getAllClasses() {
    try {
      // Send the request to the curriculum service
      return await this.curriculumService.send({ cmd: 'get_all_classes' }, {}).toPromise();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Route to get class details by class ID
  @UseGuards(JwtGuard)
  @Get('/classes/:id')
  async getClassDetails(@Param('id') id: string) {
    try {
      // Send the request to the curriculum service for class details
      return await this.curriculumService.send({ cmd: 'get_class_details' }, { id }).toPromise();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
