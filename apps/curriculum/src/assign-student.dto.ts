import { ApiProperty } from "@nestjs/swagger";

export class StudentDto {
    @ApiProperty()
    student_id: number;
  
    @ApiProperty()
  class_id: string;
}
  