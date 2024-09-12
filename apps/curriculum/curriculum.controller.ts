import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculumService} from './curriculum.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Public } from '../gateway/src/auth/public.decorator';

@Controller('data')
export class CurriculumController {
  constructor(private readonly dataService: CurriculumService) {}

  @Public()
  @Get()
  findAllClasses() {
    return this.dataService.findAllClasses();
  }

  @Public()
  @Get()
  findAllCourses() {
    return this.dataService.findAllCourses();
  }
}
