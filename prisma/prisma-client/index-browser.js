
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_email: 'user_email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  first_name: 'first_name',
  last_name: 'last_name',
  nickname: 'nickname',
  deleted: 'deleted'
};

exports.Prisma.RoleScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name',
  role_description: 'role_description'
};

exports.Prisma.UserRoleScalarFieldEnum = {
  user_email: 'user_email',
  role_id: 'role_id'
};

exports.Prisma.UserApplicationPreferencesScalarFieldEnum = {
  user_email: 'user_email',
  application_id: 'application_id',
  accepted_privacy_policy: 'accepted_privacy_policy',
  accepted_cookies_policy: 'accepted_cookies_policy'
};

exports.Prisma.ApplicationScalarFieldEnum = {
  application_id: 'application_id',
  application_name: 'application_name',
  application_description: 'application_description',
  application_url: 'application_url'
};

exports.Prisma.DataRemovalRequestScalarFieldEnum = {
  data_removal_request_id: 'data_removal_request_id',
  user_email: 'user_email',
  data_removal_request: 'data_removal_request',
  data_removal_status: 'data_removal_status',
  data_removal_date: 'data_removal_date'
};

exports.Prisma.MeetingKindScalarFieldEnum = {
  meeting_kind_id: 'meeting_kind_id',
  meeting_kind_name: 'meeting_kind_name'
};

exports.Prisma.CourseStructureScalarFieldEnum = {
  course_id: 'course_id',
  module_id: 'module_id',
  section_id: 'section_id',
  lesson_id: 'lesson_id'
};

exports.Prisma.ClassScalarFieldEnum = {
  class_id: 'class_id',
  class_code: 'class_code',
  course_id: 'course_id',
  start_date: 'start_date',
  end_date: 'end_date',
  tuition_lang_code: 'tuition_lang_code',
  time_of_day_id: 'time_of_day_id',
  start_time_gmt3: 'start_time_gmt3',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  classSizeClass_size_id: 'classSizeClass_size_id'
};

exports.Prisma.ClassCallScalarFieldEnum = {
  class_call_id: 'class_call_id',
  class_id: 'class_id',
  call_date: 'call_date',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  meeting_kind_id: 'meeting_kind_id'
};

exports.Prisma.ClassSizeScalarFieldEnum = {
  class_size_id: 'class_size_id',
  class_size_name: 'class_size_name'
};

exports.Prisma.CourseScalarFieldEnum = {
  course_code: 'course_code',
  course_name: 'course_name',
  course_level_id: 'course_level_id',
  created_date: 'created_date',
  subject_code: 'subject_code'
};

exports.Prisma.CourseAdviceScalarFieldEnum = {
  advice_id: 'advice_id',
  course_code: 'course_code',
  advice_text: 'advice_text',
  last_used_date: 'last_used_date',
  created_date: 'created_date'
};

exports.Prisma.CourseTaskScalarFieldEnum = {
  course_task_id: 'course_task_id',
  course_id: 'course_id',
  module_id: 'module_id',
  section_id: 'section_id',
  lesson_id: 'lesson_id',
  task_id: 'task_id',
  question: 'question'
};

exports.Prisma.CourseLevelScalarFieldEnum = {
  course_level_id: 'course_level_id',
  course_level_name: 'course_level_name'
};

exports.Prisma.SubjectScalarFieldEnum = {
  subject_code: 'subject_code',
  subject_name: 'subject_name'
};

exports.Prisma.CourseLevelsPerSubjectScalarFieldEnum = {
  course_level_id: 'course_level_id',
  subject_code: 'subject_code'
};

exports.Prisma.LessonScalarFieldEnum = {
  lesson_id: 'lesson_id',
  lesson_name: 'lesson_name',
  lesson_description: 'lesson_description',
  lesson_order: 'lesson_order',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  section_id: 'section_id',
  moduleModule_id: 'moduleModule_id'
};

exports.Prisma.MentorScalarFieldEnum = {
  mentor_id: 'mentor_id',
  user_id: 'user_id',
  mentor_description_en: 'mentor_description_en',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted'
};

exports.Prisma.MentorsClassesScalarFieldEnum = {
  mentor_id: 'mentor_id',
  class_id: 'class_id',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted'
};

exports.Prisma.MentorPayModelScalarFieldEnum = {
  mentor_id: 'mentor_id',
  class_size_id: 'class_size_id',
  start_date: 'start_date',
  pay_rate_per_hour: 'pay_rate_per_hour',
  created_date: 'created_date',
  end_date: 'end_date',
  deleted: 'deleted'
};

exports.Prisma.ModuleScalarFieldEnum = {
  module_id: 'module_id',
  module_name: 'module_name',
  module_description: 'module_description',
  module_order: 'module_order',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  course_id: 'course_id'
};

exports.Prisma.SectionScalarFieldEnum = {
  section_id: 'section_id',
  section_name: 'section_name',
  section_description: 'section_description',
  section_order: 'section_order',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  module_id: 'module_id'
};

exports.Prisma.TimeOfDayScalarFieldEnum = {
  time_of_day_id: 'time_of_day_id',
  time_of_day_name: 'time_of_day_name'
};

exports.Prisma.TuitionLangScalarFieldEnum = {
  tuition_lang_code: 'tuition_lang_code',
  tuition_lang_name: 'tuition_lang_name'
};

exports.Prisma.DeckScalarFieldEnum = {
  deck_id: 'deck_id',
  user_id: 'user_id',
  deck_description: 'deck_description'
};

exports.Prisma.LessonCardScalarFieldEnum = {
  card_id: 'card_id',
  deck_id: 'deck_id',
  question: 'question',
  answer: 'answer',
  example: 'example',
  course_code: 'course_code',
  lesson_id: 'lesson_id'
};

exports.Prisma.UserCardScalarFieldEnum = {
  user_card_id: 'user_card_id',
  user_id: 'user_id',
  question: 'question',
  answer: 'answer',
  example: 'example',
  lesson_id: 'lesson_id'
};

exports.Prisma.VocabularyScalarFieldEnum = {
  vocabulary_id: 'vocabulary_id',
  user_id: 'user_id'
};

exports.Prisma.VocabularyInboxScalarFieldEnum = {
  user_id: 'user_id',
  question: 'question',
  answer: 'answer'
};

exports.Prisma.BookingRequestScalarFieldEnum = {
  booking_request_id: 'booking_request_id',
  class_id: 'class_id',
  booking_date: 'booking_date',
  booking_request_status: 'booking_request_status',
  user_stated_name: 'user_stated_name',
  user_stated_phone: 'user_stated_phone',
  user_stated_email: 'user_stated_email',
  user_stated_telegram_nickname: 'user_stated_telegram_nickname'
};

exports.Prisma.ClassTaskScalarFieldEnum = {
  class_task_id: 'class_task_id',
  course_task_id: 'course_task_id',
  class_id: 'class_id'
};

exports.Prisma.StudentScalarFieldEnum = {
  student_id: 'student_id',
  user_id: 'user_id',
  student_nickname: 'student_nickname',
  enrolled_date: 'enrolled_date',
  left_date: 'left_date',
  created_date: 'created_date',
  updated_date: 'updated_date',
  deleted: 'deleted',
  class_id: 'class_id'
};

exports.Prisma.StudentAnswerScalarFieldEnum = {
  student_answer_id: 'student_answer_id',
  student_id: 'student_id',
  class_task_id: 'class_task_id',
  answer: 'answer'
};

exports.Prisma.StudentTaskScalarFieldEnum = {
  student_task_id: 'student_task_id',
  student_id: 'student_id',
  class_task_id: 'class_task_id',
  task_status: 'task_status'
};

exports.Prisma.TaskScalarFieldEnum = {
  task_id: 'task_id',
  task_description: 'task_description',
  task_text: 'task_text',
  task_type_id: 'task_type_id',
  task_context_id: 'task_context_id',
  task_form_id: 'task_form_id',
  task_created_date: 'task_created_date',
  task_updated_date: 'task_updated_date',
  deleted: 'deleted',
  lesson_id: 'lesson_id',
  gap_map: 'gap_map'
};

exports.Prisma.TaskFormScalarFieldEnum = {
  task_form_id: 'task_form_id',
  task_form_name: 'task_form_name',
  task_form_description: 'task_form_description'
};

exports.Prisma.TaskContextScalarFieldEnum = {
  task_context_id: 'task_context_id',
  task_context_name: 'task_context_name',
  task_context_description: 'task_context_description'
};

exports.Prisma.TaskOptionScalarFieldEnum = {
  task_option_id: 'task_option_id',
  task_id: 'task_id',
  task_option_text: 'task_option_text',
  task_option_order: 'task_option_order',
  is_correct: 'is_correct'
};

exports.Prisma.TaskTypeScalarFieldEnum = {
  task_type_id: 'task_type_id',
  task_type_name: 'task_type_name',
  task_type_description: 'task_type_description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.DataRemovalStatusEnum = exports.$Enums.DataRemovalStatusEnum = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.ClassSizesEnum = exports.$Enums.ClassSizesEnum = {
  INDIVIDUAL: 'INDIVIDUAL',
  GROUP_2_4: 'GROUP_2_4',
  GROUP_5_8: 'GROUP_5_8',
  GROUP_9_12: 'GROUP_9_12'
};

exports.BookingRequestStatus = exports.$Enums.BookingRequestStatus = {
  PENDING: 'PENDING',
  NEGOITIATING: 'NEGOITIATING',
  ASSIGNED: 'ASSIGNED',
  REJECTED: 'REJECTED',
  LOST: 'LOST'
};

exports.StudentTaskStatus = exports.$Enums.StudentTaskStatus = {
  PENDING: 'PENDING',
  BLOCKED: 'BLOCKED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  UserRole: 'UserRole',
  UserApplicationPreferences: 'UserApplicationPreferences',
  Application: 'Application',
  DataRemovalRequest: 'DataRemovalRequest',
  MeetingKind: 'MeetingKind',
  CourseStructure: 'CourseStructure',
  Class: 'Class',
  ClassCall: 'ClassCall',
  ClassSize: 'ClassSize',
  Course: 'Course',
  CourseAdvice: 'CourseAdvice',
  CourseTask: 'CourseTask',
  CourseLevel: 'CourseLevel',
  Subject: 'Subject',
  CourseLevelsPerSubject: 'CourseLevelsPerSubject',
  Lesson: 'Lesson',
  Mentor: 'Mentor',
  MentorsClasses: 'MentorsClasses',
  MentorPayModel: 'MentorPayModel',
  Module: 'Module',
  Section: 'Section',
  TimeOfDay: 'TimeOfDay',
  TuitionLang: 'TuitionLang',
  Deck: 'Deck',
  LessonCard: 'LessonCard',
  UserCard: 'UserCard',
  Vocabulary: 'Vocabulary',
  VocabularyInbox: 'VocabularyInbox',
  BookingRequest: 'BookingRequest',
  ClassTask: 'ClassTask',
  Student: 'Student',
  StudentAnswer: 'StudentAnswer',
  StudentTask: 'StudentTask',
  Task: 'Task',
  TaskForm: 'TaskForm',
  TaskContext: 'TaskContext',
  TaskOption: 'TaskOption',
  TaskType: 'TaskType'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
