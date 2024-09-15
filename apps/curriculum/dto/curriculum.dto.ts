import { ApiProperty } from '@nestjs/swagger';

export class IDClassParametr {
  @ApiProperty()
  class_id: string;
}

export class ClassSchema {
  @ApiProperty()
  class_id: string;

  @ApiProperty()
  class_code?: string;

  @ApiProperty()
  course_id: string;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  end_date?: Date;

  @ApiProperty()
  tuition_lang_code: string;

  @ApiProperty()
  time_of_day_id: string;

  @ApiProperty()
  start_time_gmt3: string;

  @ApiProperty()
  classSizeClass_size_id: string;

  @ApiProperty()
  created_date?: Date;

  @ApiProperty()
  updated_date?: Date;

  @ApiProperty()
  deleted?: boolean;

  // mentor_classes?: MentorsClasses[];
  // students?: Student[];
  // booking_requests?: BookingRequest[];
  // class_calls?: ClassCall[];
  // classTask?: ClassTask[];
}

export class IDCourseParametr {
@ApiProperty()
  course_code: string;
}

export class CourseSchema {
  @ApiProperty()
  course_code: string; // Unique identifier for the course

  @ApiProperty()
  course_name?: string; // Optional name of the course

  @ApiProperty()
  course_level_id: string; // Identifier for the associated course level

  @ApiProperty()
  created_date?: Date; // Optional creation date

  @ApiProperty()
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
