import {
  IsInt,
  IsString,
  IsDate,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateClassDto {
  @IsOptional() // Optional, since class_code is generated
  @IsString()
  class_code?: string;

  @IsOptional() // Optional, if course_id can be nullable
  @IsInt()
  course_id?: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsOptional()
  @IsDate()
  end_date?: Date;

  @IsNotEmpty()
  @IsString()
  tuition_lang_code: string;

  @IsNotEmpty()
  @IsInt()
  max_capacity: number;

  @IsNotEmpty()
  @IsString()
  time_of_day_id: string;
}

export class TimeOfDayDto {
  @IsNotEmpty()
  @IsString()
  time_of_day_id: string;

  @IsNotEmpty()
  @IsString()
  time_of_day_label: string;
}
