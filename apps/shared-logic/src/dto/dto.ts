import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional, IsBoolean, IsInt, IsEnum, IsEmail } from 'class-validator';

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
}

export class CourseStructureSchema {
  @ApiProperty({ description: 'Course ID associated with the structure' })
  @IsString()
  course_id: string;

  @ApiProperty({ description: 'Module ID associated with the structure' })
  @IsInt()
  module_id: number;

  @ApiProperty({ description: 'Section ID associated with the structure' })
  @IsInt()
  section_id: number;

  @ApiProperty({ description: 'Lesson ID associated with the structure' })
  @IsInt()
  lesson_id: number;
}

export class ClassCallSchema {
  @ApiProperty({ description: 'Unique identifier for the class call' })
  @IsString()
  class_call_id: string;

  @ApiProperty({ description: 'Class ID associated with the call' })
  @IsString()
  class_id: string;

  @ApiProperty({ description: 'Date of the class call' })
  @IsDate()
  call_date: Date;

  @ApiProperty({ description: 'Created date of the call', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the call', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the call is deleted', default: false })
  @IsBoolean()
  deleted: boolean;
}

export class ClassSizeSchema {
  @ApiProperty({ description: 'Unique identifier for the class size' })
  @IsString()
  class_size_id: string;
}

export class CourseAdviceSchema {
  @ApiProperty({ description: 'Unique identifier for the advice' })
  @IsString()
  advice_id: string;

  @ApiProperty({ description: 'Course code associated with the advice' })
  @IsString()
  course_code: string;

  @ApiProperty({ description: 'Advice text', required: false })
  @IsOptional()
  @IsString()
  advice_text?: string;

  @ApiProperty({ description: 'Last used date of the advice', required: false })
  @IsOptional()
  @IsString()
  last_used_date?: string;

  @ApiProperty({ description: 'Creation date of the advice' })
  @IsString()
  created_date: string;
}

export class CourseTaskSchema {
  @ApiProperty({ description: 'Unique identifier for the course task' })
  @IsString()
  course_task_id: string;

  @ApiProperty({ description: 'Course ID associated with the task' })
  @IsString()
  course_id: string;

  @ApiProperty({ description: 'Module ID associated with the task' })
  @IsInt()
  module_id: number;

  @ApiProperty({ description: 'Section ID associated with the task' })
  @IsInt()
  section_id: number;

  @ApiProperty({ description: 'Lesson ID associated with the task' })
  @IsInt()
  lesson_id: number;

  @ApiProperty({ description: 'Task ID associated with the course task' })
  @IsInt()
  task_id: number;

  @ApiProperty({ description: 'Question in the course task' })
  @IsString()
  question: string;
}

export class CourseLevelSchema {
  @ApiProperty({ description: 'Unique identifier for the course level' })
  @IsString()
  course_level_id: string;

  @ApiProperty({ description: 'Name of the course level' })
  @IsString()
  course_level_name: string;
}

export class SubjectSchema {
  @ApiProperty({ description: 'Unique identifier for the subject' })
  @IsString()
  subject_code: string;

  @ApiProperty({ description: 'Name of the subject' })
  @IsString()
  subject_name: string;
}

export class CourseLevelsPerSubjectSchema {
  @ApiProperty({ description: 'Course level ID associated with the subject' })
  @IsString()
  course_level_id: string;

  @ApiProperty({ description: 'Subject code associated with the course level' })
  @IsString()
  subject_code: string;
}

export class ClassTaskSchema {
  @ApiProperty({ description: 'Unique identifier for the class task' })
  @IsInt()
  class_task_id: number;

  @ApiProperty({ description: 'Identifier for the associated course task' })
  @IsString()
  course_task_id: string;

  @ApiProperty({ description: 'Identifier for the associated class' })
  @IsString()
  class_id: string;
}

export class StudentSchema {
  @ApiProperty({ description: 'Unique identifier for the student' })
  @IsString()
  student_id: string;

  @ApiProperty({ description: 'Identifier for the user' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Optional nickname for the student', required: false })
  @IsOptional()
  @IsString()
  student_nickname?: string;

  @ApiProperty({ description: 'Date when the student joined the class', required: false })
  @IsOptional()
  @IsDate()
  enrolled_date?: Date;

  @ApiProperty({ description: 'Date when the student left the class', required: false })
  @IsOptional()
  @IsDate()
  left_date?: Date;

  @ApiProperty({ description: 'Creation date of the student record', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the student record', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({
    description: 'Indicates if the student record is deleted',
    default: false,
    required: false,
  })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ description: 'Identifier for the associated class' })
  @IsString()
  class_id: string;
}

export class StudentAnswerSchema {
  @ApiProperty({ description: 'Unique identifier for the student answer' })
  @IsInt()
  student_answer_id: number;

  @ApiProperty({ description: 'Identifier for the associated student' })
  @IsString()
  student_id: string;

  @ApiProperty({ description: 'Identifier for the associated class task' })
  @IsInt()
  class_task_id: number;

  @ApiProperty({ description: 'Answer provided by the student' })
  @IsString()
  answer: string;
}

export class StudentTaskSchema {
  @ApiProperty({ description: 'Unique identifier for the student task' })
  @IsInt()
  student_task_id: number;

  @ApiProperty({ description: 'Identifier for the associated student' })
  @IsString()
  student_id: string;

  @ApiProperty({ description: 'Identifier for the associated class task' })
  @IsInt()
  class_task_id: number;
}

export class TaskSchema {
  @ApiProperty({ description: 'Unique identifier for the task' })
  @IsInt()
  task_id: number;

  @ApiProperty({ description: 'Instruction for the task', required: false })
  @IsOptional()
  @IsString()
  task_description?: string;

  @ApiProperty({ description: 'The actual task text', required: false })
  @IsOptional()
  @IsString()
  task_text?: string;

  @ApiProperty({ description: 'Identifier for the task type' })
  @IsInt()
  task_type_id: number;

  @ApiProperty({ description: 'Identifier for the task context' })
  @IsString()
  task_context_id: string;

  @ApiProperty({ description: 'Optional identifier for the task form', required: false })
  @IsOptional()
  @IsInt()
  task_form_id?: number;

  @ApiProperty({ description: 'Optional creation date of the task', required: false })
  @IsOptional()
  @IsString()
  task_created_date?: Date;

  @ApiProperty({ description: 'Optional last updated date of the task', required: false })
  @IsOptional()
  @IsString()
  task_updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the task is deleted', default: false, required: false })
  @IsBoolean()
  deleted?: boolean;

  @ApiProperty({ description: 'Identifier for the associated lesson' })
  @IsInt()
  lesson_id: number;

  @ApiProperty({ description: 'Optional gap map for the task', required: false })
  @IsOptional()
  @IsString()
  gap_map?: string;
}

export class TaskContextSchema {
  @ApiProperty({ description: 'Unique identifier for the task context' })
  @IsString()
  task_context_id: string;

  @ApiProperty({ description: 'Name of the task context' })
  @IsString()
  task_context_name: string;

  @ApiProperty({ description: 'Optional description of the task context', required: false })
  @IsOptional()
  @IsString()
  task_context_description?: string;
}

export class TaskOptionSchema {
  @ApiProperty({ description: 'Unique identifier for the task option' })
  @IsInt()
  task_option_id: number;

  @ApiProperty({ description: 'Identifier for the associated task' })
  @IsInt()
  task_id: number;

  @ApiProperty({ description: 'Text of the task option' })
  @IsString()
  task_option_text: string;

  @ApiProperty({ description: 'Optional order of the task option', required: false })
  @IsOptional()
  @IsInt()
  task_option_order?: number;

  @ApiProperty({ description: 'Indicates if the task option is correct' })
  @IsBoolean()
  is_correct: boolean;
}

export class TaskTypeSchema {
  @ApiProperty({ description: 'Unique identifier for the task type' })
  @IsInt()
  task_type_id: number;

  @ApiProperty({ description: 'Name of the task type' })
  @IsString()
  task_type_name: string;

  @ApiProperty({ description: 'Optional description of the task type', required: false })
  @IsOptional()
  @IsString()
  task_type_description?: string;
}

export class TaskFormSchema {
  @ApiProperty({ description: 'Unique identifier for the task form' })
  @IsInt()
  task_form_id: number;

  @ApiProperty({ description: 'Name of the task form' })
  @IsString()
  task_form_name: string;

  @ApiProperty({ description: 'Optional description of the task form', required: false })
  @IsOptional()
  @IsString()
  task_form_description?: string;
}

export class BookingRequestSchema {
  @ApiProperty({ description: 'Unique identifier for the booking request' })
  @IsString()
  booking_request_id: string;

  @ApiProperty({ description: 'Identifier for the associated class' })
  @IsString()
  class_id: string;

  @ApiProperty({ description: 'Date of the booking request' })
  @IsDate()
  booking_date: Date;

  @ApiProperty({ description: 'User stated name', required: false })
  @IsOptional()
  @IsString()
  user_stated_name?: string;

  @ApiProperty({ description: 'User stated phone', required: false })
  @IsOptional()
  @IsString()
  user_stated_phone?: string;

  @ApiProperty({ description: 'User stated email', required: false })
  @IsOptional()
  @IsString()
  user_stated_email?: string;

  @ApiProperty({ description: 'User stated Telegram nickname', required: false })
  @IsOptional()
  @IsString()
  user_stated_telegram_nickname?: string;
}

export class DeckSchema {
  @ApiProperty({ description: 'Unique identifier for the deck' })
  @IsString()
  deck_id: string;

  @ApiProperty({ description: 'Identifier for the user' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Description of the deck', required: false })
  @IsOptional()
  @IsString()
  deck_description?: string;
}

export class LessonCardSchema {
  @ApiProperty({ description: 'Unique identifier for the card' })
  @IsString()
  card_id: string;

  @ApiProperty({ description: 'Identifier for the associated deck' })
  @IsString()
  deck_id: string;

  @ApiProperty({ description: 'Question of the lesson card' })
  @IsString()
  question: string;

  @ApiProperty({ description: 'Answer of the lesson card' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'Example related to the lesson card', required: false })
  @IsOptional()
  @IsString()
  example?: string;

  @ApiProperty({ description: 'Course code associated with the lesson card' })
  @IsString()
  course_code: string;

  @ApiProperty({ description: 'Lesson ID associated with the lesson card' })
  @IsInt()
  lesson_id: number;
}

export class UserCardSchema {
  @ApiProperty({ description: 'Unique identifier for the user card' })
  @IsString()
  user_card_id: string;

  @ApiProperty({ description: 'Identifier for the associated user' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Question of the user card' })
  @IsString()
  question: string;

  @ApiProperty({ description: 'Answer of the user card' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'Example related to the user card', required: false })
  @IsOptional()
  @IsString()
  example?: string;

  @ApiProperty({ description: 'Lesson ID associated with the user card', required: false })
  @IsOptional()
  @IsInt()
  lesson_id?: number;
}

export class VocabularySchema {
  @ApiProperty({ description: 'Unique identifier for the vocabulary' })
  @IsString()
  vocabulary_id: string;

  @ApiProperty({ description: 'Identifier for the associated user' })
  @IsString()
  user_id: string;
}

export class VocabularyInboxSchema {
  @ApiProperty({ description: 'Identifier for the associated user' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Question for the vocabulary inbox' })
  @IsString()
  question: string;

  @ApiProperty({ description: 'Answer for the vocabulary inbox' })
  @IsString()
  answer: string;
}

export class LessonSchema {
  @ApiProperty({ description: 'Unique identifier for the lesson' })
  @IsInt()
  lesson_id: number;

  @ApiProperty({ description: 'Name of the lesson', uniqueItems: true })
  @IsString()
  lesson_name: string;

  @ApiProperty({ description: 'Description of the lesson', required: false })
  @IsOptional()
  @IsString()
  lesson_description?: string;

  @ApiProperty({ description: 'Order of the lesson' })
  @IsInt()
  lesson_order: number;

  @ApiProperty({ description: 'Creation date of the lesson', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the lesson', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the lesson is deleted', default: false })
  @IsBoolean()
  deleted: boolean;

  @ApiProperty({ description: 'Identifier for the associated section' })
  @IsInt()
  section_id: number;
}

export class MentorSchema {
  @ApiProperty({ description: 'Unique identifier for the mentor' })
  @IsString()
  mentor_id: string;

  @ApiProperty({ description: 'User ID associated with the mentor' })
  @IsString()
  user_id: string;

  @ApiProperty({ description: 'Description of the mentor in English', required: false })
  @IsOptional()
  @IsString()
  mentor_description_en?: string;

  @ApiProperty({ description: 'Creation date of the mentor', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the mentor', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the mentor is deleted', default: false })
  @IsBoolean()
  deleted: boolean;
}

export class MentorsClassesSchema {
  @ApiProperty({ description: 'Mentor ID associated with the class' })
  @IsString()
  mentor_id: string;

  @ApiProperty({ description: 'Class ID associated with the mentor' })
  @IsString()
  class_id: string;

  @ApiProperty({ description: 'Creation date of the mentor-class relationship', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({
    description: 'Last updated date of the mentor-class relationship',
    required: false,
  })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the relationship is deleted', default: false })
  @IsBoolean()
  deleted: boolean;
}

export class MentorPayModelSchema {
  @ApiProperty({ description: 'Mentor ID associated with the pay model' })
  @IsString()
  mentor_id: string;

  @ApiProperty({ description: 'Class size ID associated with the pay model' })
  @IsString()
  class_size_id: string;

  @ApiProperty({ description: 'Start date of the pay model' })
  @IsDate()
  start_date: Date;

  @ApiProperty({ description: 'Pay rate per hour in USD' })
  @IsOptional()
  pay_rate_per_hour: number;

  @ApiProperty({ description: 'Creation date of the pay model', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'End date of the pay model', required: false })
  @IsOptional()
  @IsDate()
  end_date?: Date;

  @ApiProperty({ description: 'Indicates if the pay model is deleted', default: false })
  @IsBoolean()
  deleted: boolean;
}

export class ModuleSchema {
  @ApiProperty({ description: 'Unique identifier for the module' })
  @IsInt()
  module_id: number;

  @ApiProperty({ description: 'Name of the module', uniqueItems: true })
  @IsString()
  module_name: string;

  @ApiProperty({ description: 'Description of the module', required: false })
  @IsOptional()
  @IsString()
  module_description?: string;

  @ApiProperty({ description: 'Order of the module' })
  @IsInt()
  module_order: number;

  @ApiProperty({ description: 'Creation date of the module', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the module', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the module is deleted', default: false })
  @IsBoolean()
  deleted: boolean;

  @ApiProperty({ description: 'Course ID associated with the module' })
  @IsString()
  course_id: string;
}

export class SectionSchema {
  @ApiProperty({ description: 'Unique identifier for the section' })
  @IsInt()
  section_id: number;

  @ApiProperty({ description: 'Name of the section', uniqueItems: true })
  @IsString()
  section_name: string;

  @ApiProperty({ description: 'Description of the section', required: false })
  @IsOptional()
  @IsString()
  section_description?: string;

  @ApiProperty({ description: 'Order of the section' })
  @IsInt()
  section_order: number;

  @ApiProperty({ description: 'Creation date of the section', required: false })
  @IsOptional()
  @IsDate()
  created_date?: Date;

  @ApiProperty({ description: 'Last updated date of the section', required: false })
  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @ApiProperty({ description: 'Indicates if the section is deleted', default: false })
  @IsBoolean()
  deleted: boolean;

  @ApiProperty({ description: 'Module ID associated with the section' })
  @IsInt()
  module_id: number;
}

export class TimeOfDaySchema {
  @ApiProperty({ description: 'Unique identifier for the time of day' })
  @IsString()
  time_of_day_id: string;

  @ApiProperty({ description: 'Name of the time of day', uniqueItems: true })
  @IsString()
  time_of_day_name: string;
}

export class TuitionLangSchema {
  @ApiProperty({ description: 'Unique identifier for the tuition language' })
  @IsString()
  tuition_lang_code: string;

  @ApiProperty({ description: 'Name of the tuition language', uniqueItems: true })
  @IsString()
  tuition_lang_name: string;
}

export class ApplicationSchema {
  @ApiProperty({ description: 'Unique identifier for the application' })
  @IsString()
  application_id: string;

  @ApiProperty({ description: 'Name of the application' })
  @IsString()
  application_name: string;

  @ApiProperty({ description: 'Description of the application', required: false })
  @IsOptional()
  @IsString()
  application_description?: string;

  @ApiProperty({ description: 'URL of the application', required: false })
  @IsOptional()
  @IsString()
  application_url?: string;
}

export class DataRemovalRequestSchema {
  @ApiProperty({ description: 'Unique identifier for the data removal request' })
  @IsInt()
  data_removal_request_id: number;

  @ApiProperty({ description: 'Email of the user making the request' })
  @IsEmail()
  user_email: string;

  @ApiProperty({ description: 'Details of the data removal request' })
  @IsString()
  data_removal_request: string;

  @ApiProperty({ description: 'Date of the data removal request' })
  @IsDate()
  data_removal_date: Date;
}

export class MeetingKindSchema {
  @ApiProperty({ description: 'Unique identifier for the meeting kind' })
  @IsString()
  meeting_kind_id: string;

  @ApiProperty({ description: 'Name of the meeting kind' })
  @IsString()
  meeting_kind_name: string;
}

export class UserSchema {
  @ApiProperty({ description: 'Unique email identifier for the user' })
  @IsEmail()
  user_email: string;

  @ApiProperty({ description: 'Creation date of the user account', default: () => new Date() })
  @IsDate()
  created_at: Date;

  @ApiProperty({ description: 'Last update date of the user account', required: false })
  @IsOptional()
  @IsDate()
  updated_at?: Date;

  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  first_name: string;

  @ApiProperty({ description: 'Last name of the user' })
  @IsString()
  last_name: string;

  @ApiProperty({ description: 'Nickname of the user', required: false })
  @IsOptional()
  @IsString()
  nickname?: string;

  @ApiProperty({ description: 'Indicates if the user is soft deleted', default: false })
  @IsBoolean()
  deleted: boolean;
}

export class RoleSchema {
  @ApiProperty({ description: 'Unique identifier for the role' })
  @IsString()
  role_id: string;

  @ApiProperty({ description: 'Name of the role', required: false })
  @IsOptional()
  @IsString()
  role_name?: string;

  @ApiProperty({ description: 'Description of the role', required: false })
  @IsOptional()
  @IsString()
  role_description?: string;
}

export class UserRoleSchema {
  @ApiProperty({ description: 'User email associated with the role' })
  @IsEmail()
  user_email: string;

  @ApiProperty({ description: 'Role ID associated with the user' })
  @IsString()
  role_id: string;
}

export class UserApplicationPreferencesSchema {
  @ApiProperty({ description: 'User email associated with the preferences' })
  @IsEmail()
  user_email: string;

  @ApiProperty({ description: 'Application ID associated with the preferences' })
  @IsString()
  application_id: string;

  @ApiProperty({ description: 'Indicates if the user accepted the privacy policy' })
  @IsBoolean()
  accepted_privacy_policy: boolean;

  @ApiProperty({ description: 'Indicates if the user accepted the cookies policy' })
  @IsBoolean()
  accepted_cookies_policy: boolean;
}
