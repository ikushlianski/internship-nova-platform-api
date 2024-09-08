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

  @Post()
  createClass(@Body() createClassDto: CreateClassDto) {
    return this.dataService.createClass(createClassDto);
  }

  @Public()
  @Get()
  findAllClasses() {
    return this.dataService.findAllClasses();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.classesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
  //   return this.classesService.update(+id, updateClassDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.classesService.remove(+id);
  // }
}
