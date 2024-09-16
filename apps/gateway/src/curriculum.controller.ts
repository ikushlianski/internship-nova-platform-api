import { Controller, Get } from '@nestjs/common';
import { UseRoles, Public } from './auth/public.decorator';
import { Roles } from './auth/auth.roles'; 


@Controller('curriculum')
export class CurriculumController {
  @Get()
  @UseRoles(Roles.Student) // only for students
  getCurriculum() {
    return [
      { id: 1, lesson: 'Mathematics' },
      { id: 2, lesson: 'Physics' },
    ];
  }
}
