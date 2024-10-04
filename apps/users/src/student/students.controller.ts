import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly userService: StudentsService) { }

  @MessagePattern({ cmd: 'create_student' })
  async handleFindOrCreateStudent(@Payload() userDto: ParsedUserData) {
    const user = await this.userService.findOrCreateUserWRoleId(userDto,'1');
    console.log(user);
    if(user){
      return await this.userService.findOrCreateStudent(user);
    }
    return new HttpException(
      "This user already have Student role",
      HttpStatus.BAD_REQUEST,
    );
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
