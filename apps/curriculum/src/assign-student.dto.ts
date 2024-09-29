import { ApiProperty } from "@nestjs/swagger";

export class StudentDto {
    @ApiProperty()
    student_id: string;
  
    @ApiProperty()
  class_id: string;
}
  