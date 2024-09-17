import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsBoolean } from 'class-validator';

export class ClassSchema {
  @ApiProperty({ description: 'Unique identifier for the class' })
  @IsString()
  class_id: string;

  @ApiProperty({ description: 'Code for the class', required: false })
  @IsOptional() 
  @IsString()
  class_code?: string;

  @ApiProperty({ description: 'Identifier for the associated course' })
  @IsString()
  course_id: string;

  @ApiProperty({ description: 'Start date of the class' })
  @IsDate()
  start_date: Date;

  @ApiProperty({ description: 'End date of the class', required: false })
  @IsOptional() 
  @IsDate()
  end_date?: Date;

  @ApiProperty({ description: 'Language code for the tuition' })
  @IsString()
  tuition_lang_code: string;

  @ApiProperty({ description: 'Identifier for the time of day' })
  @IsString()
  time_of_day_id: string;

  @ApiProperty({ description: 'Class start time in GMT+3 format' })
  @IsString()
  start_time_gmt3: string;

  @ApiProperty({ description: 'Identifier for the class size' })
  @IsString()
  classSizeClass_size_id: string;

  @ApiProperty({ description: 'Date when the class was created', required: false })
  @IsOptional() 
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Date when the class was last updated', required: false })
  @IsOptional() 
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the class is deleted', required: false })
  @IsOptional()
  @IsBoolean()
  deleted?: boolean;

  // Uncomment and add validation for related entities if needed
  // @IsOptional()
  // mentor_classes?: MentorsClasses[];

  // @IsOptional()
  // students?: Student[];

  // @IsOptional()
  // booking_requests?: BookingRequest[];

  // @IsOptional()
  // class_calls?: ClassCall[];

  // @IsOptional()
  // classTask?: ClassTask[];
}

export class CourseSchema {
  @ApiProperty({ description: 'Unique identifier for the course' })
  @IsString()
  course_code: string;

  @ApiProperty({ description: 'Optional name of the course', required: false })
  @IsOptional()
  @IsString()
  course_name?: string; 

  @ApiProperty({ description: 'Identifier for the associated course level' })
  @IsString()
  course_level_id: string;

  @ApiProperty({ description: 'Date when the course was created', required: false })
  @IsOptional() 
  @IsDate()
  created_date?: Date; 

  @ApiProperty({ description: 'Identifier for the associated subject' })
  @IsString()
  subject_code: string;

  // Uncomment and add validation for related entities if needed
  // @IsOptional()
  // course_level?: CourseLevel;

  // @IsOptional()
  // course_advice?: CourseAdvice[];

  // @IsOptional()
  // classes?: Class[];

  // @IsOptional()
  // subject?: Subject;

  // @IsOptional()
  // course_structure?: CourseStructure[];

  // @IsOptional()
  // course_task?: CourseTask[];

  // @IsOptional()
  // module?: Module[];

  // @IsOptional()
  // lesson_card?: LessonCard[];
}
