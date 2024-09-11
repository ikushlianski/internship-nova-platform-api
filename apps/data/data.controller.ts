import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataService } from './data.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Public } from './../gateway/src/auth/public.decorator';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

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
