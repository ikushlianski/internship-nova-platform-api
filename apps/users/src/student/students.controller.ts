import { Controller } from '@nestjs/common';

import { MessagePattern, Payload } from '@nestjs/microservices';

import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';
import { UsersService } from 'apps/users/src/users.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly userService: UsersService) { }

  @MessagePattern({ cmd: 'create_student' })
  async handleFindOrCreateStudent(@Payload() userDto: ParsedUserData) {
    const student = await this.userService.findOrCreateStudent(userDto);
    return student;
  }

  @MessagePattern({ cmd: 'get_student' })
  async handleGetStudentByID(@Payload() id: string) {
    return {
      id,
      email: 'abc@test-user.com',  
      name: 'Test User',
    };
  }

  @MessagePattern({ cmd: 'get_all_students' })
  async handleGetAllStudents() {
    const users = await this.userService.getAllStudents();
    return users;
  }
}
