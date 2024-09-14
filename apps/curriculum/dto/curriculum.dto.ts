import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class IDClassParametr {
  @IsString()
  @IsNotEmpty()
  class_id: string;
}

export class ClassSchema {
  @IsString()
  @IsNotEmpty()
  class_id: string;

  @IsOptional()
  @IsString()
  class_code?: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsDate()
  start_date: Date;

  @IsOptional()
  @IsDate()
  end_date?: Date;

  @IsString()
  @IsNotEmpty()
  tuition_lang_code: string;

  @IsString()
  @IsNotEmpty()
  time_of_day_id: string;

  @IsString()
  @IsNotEmpty()
  start_time_gmt3: string;

  @IsString()
  @IsNotEmpty()
  classSizeClass_size_id: string;

  @IsOptional()
  @IsDate()
  created_date?: Date;

  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;

  // mentor_classes?: MentorsClasses[];
  // students?: Student[];
  // booking_requests?: BookingRequest[];
  // class_calls?: ClassCall[];
  // classTask?: ClassTask[];
}

export class IDCourseParametr {
  @IsString()
  @IsNotEmpty()
  course_code: string;
}

export class CourseSchema {
  @IsString()
  @IsNotEmpty()
  course_code: string; // Unique identifier for the course

  @IsOptional()
  @IsString()
  course_name?: string; // Optional name of the course

  @IsString()
  @IsNotEmpty()
  course_level_id: string; // Identifier for the associated course level

  @IsOptional()
  @IsDate()
  created_date?: Date; // Optional creation date

  @IsString()
  @IsNotEmpty()
  subject_code: string; // Identifier for the associated subject

  // course_level?: CourseLevel;
  // course_advice?: CourseAdvice[];
  // classes?: Class[];
  // subject?: Subject;
  // course_structure?: CourseStructure[];
  // course_task?: CourseTask[];
  // module?: Module[];
  // lesson_card?: LessonCard[];
}
