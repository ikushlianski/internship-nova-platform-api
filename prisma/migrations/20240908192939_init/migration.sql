-- CreateEnum
CREATE TYPE "DataRemovalStatusEnum" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "MeetingKindEnum" AS ENUM ('LESSON', 'WORKSHOP', 'EXAM', 'INTRO_CALL', 'OUTRO_CALL', 'SPEAKING_CLUB_LESSON', 'OTHER');

-- CreateEnum
CREATE TYPE "ClassSizesEnum" AS ENUM ('INDIVIDUAL', 'GROUP_2_4', 'GROUP_5_8', 'GROUP_9_12');

-- CreateEnum
CREATE TYPE "BookingRequestStatus" AS ENUM ('PENDING', 'NEGOITIATING', 'ASSIGNED', 'REJECTED', 'LOST');

-- CreateEnum
CREATE TYPE "StudentTaskStatus" AS ENUM ('PENDING', 'BLOCKED', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "user" (
    "user_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_email")
);

-- CreateTable
CREATE TABLE "role" (
    "role_id" TEXT NOT NULL,
    "role_name" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "user_role" (
    "user_email" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_email","role_id")
);

-- CreateTable
CREATE TABLE "user_application_preferences" (
    "user_email" TEXT NOT NULL,
    "application_id" TEXT NOT NULL,
    "accepted_privacy_policy" BOOLEAN NOT NULL,
    "accepted_cookies_policy" BOOLEAN NOT NULL,

    CONSTRAINT "user_application_preferences_pkey" PRIMARY KEY ("user_email","application_id")
);

-- CreateTable
CREATE TABLE "Application" (
    "application_id" TEXT NOT NULL,
    "application_name" TEXT NOT NULL,
    "application_description" TEXT,
    "application_url" TEXT,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("application_id")
);

-- CreateTable
CREATE TABLE "data_removal_request" (
    "data_removal_request_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "data_removal_request" TEXT NOT NULL,
    "data_removal_status" "DataRemovalStatusEnum" NOT NULL DEFAULT 'PENDING',
    "data_removal_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_removal_request_pkey" PRIMARY KEY ("data_removal_request_id")
);

-- CreateTable
CREATE TABLE "MeetingKind" (
    "meeting_kind_id" TEXT NOT NULL,
    "meeting_kind_name" TEXT NOT NULL,

    CONSTRAINT "MeetingKind_pkey" PRIMARY KEY ("meeting_kind_id")
);

-- CreateTable
CREATE TABLE "course_structure" (
    "course_id" TEXT NOT NULL,
    "module_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,

    CONSTRAINT "course_structure_pkey" PRIMARY KEY ("course_id","module_id","section_id","lesson_id")
);

-- CreateTable
CREATE TABLE "class" (
    "class_id" TEXT NOT NULL,
    "class_code" TEXT,
    "course_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "tuition_lang_id" TEXT NOT NULL,
    "time_of_day_id" TEXT NOT NULL,
    "start_time_gmt3" TEXT NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "classSizeClass_size_id" TEXT NOT NULL,

    CONSTRAINT "class_pkey" PRIMARY KEY ("class_id")
);

-- CreateTable
CREATE TABLE "class_call" (
    "class_call_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "call_date" TIMESTAMP(3) NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "meeting_kind_id" TEXT NOT NULL,

    CONSTRAINT "class_call_pkey" PRIMARY KEY ("class_call_id")
);

-- CreateTable
CREATE TABLE "class_size" (
    "class_size_id" TEXT NOT NULL,
    "class_size_name" "ClassSizesEnum" NOT NULL,

    CONSTRAINT "class_size_pkey" PRIMARY KEY ("class_size_id")
);

-- CreateTable
CREATE TABLE "course" (
    "course_code" TEXT NOT NULL,
    "course_name" TEXT,
    "course_level_id" TEXT NOT NULL,
    "created_date" TIMESTAMP(3),
    "subject_code" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("course_code")
);

-- CreateTable
CREATE TABLE "course_advice" (
    "advice_id" TEXT NOT NULL,
    "course_code" TEXT NOT NULL,
    "advice_text" TEXT,
    "last_used_date" TEXT,
    "created_date" TEXT NOT NULL,

    CONSTRAINT "course_advice_pkey" PRIMARY KEY ("advice_id")
);

-- CreateTable
CREATE TABLE "CourseTask" (
    "course_task_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "module_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "CourseTask_pkey" PRIMARY KEY ("course_task_id")
);

-- CreateTable
CREATE TABLE "course_level" (
    "course_level_id" TEXT NOT NULL,
    "course_level_name" TEXT NOT NULL,

    CONSTRAINT "course_level_pkey" PRIMARY KEY ("course_level_id")
);

-- CreateTable
CREATE TABLE "subject" (
    "subject_code" TEXT NOT NULL,
    "subject_name" TEXT NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("subject_code")
);

-- CreateTable
CREATE TABLE "course_levels_per_subject" (
    "course_level_id" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,

    CONSTRAINT "course_levels_per_subject_pkey" PRIMARY KEY ("course_level_id","subject_code")
);

-- CreateTable
CREATE TABLE "lesson" (
    "lesson_id" SERIAL NOT NULL,
    "lesson_name" TEXT NOT NULL,
    "lesson_description" TEXT,
    "lesson_order" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "section_id" INTEGER NOT NULL,
    "moduleModule_id" INTEGER,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("lesson_id")
);

-- CreateTable
CREATE TABLE "mentor" (
    "mentor_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "mentor_description_en" TEXT,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "mentor_pkey" PRIMARY KEY ("mentor_id")
);

-- CreateTable
CREATE TABLE "mentors_classes" (
    "mentor_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "mentors_classes_pkey" PRIMARY KEY ("mentor_id","class_id")
);

-- CreateTable
CREATE TABLE "mentor_pay_model" (
    "mentor_id" TEXT NOT NULL,
    "class_size_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "pay_rate_per_hour" DOUBLE PRECISION NOT NULL,
    "created_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "mentor_pay_model_pkey" PRIMARY KEY ("mentor_id","class_size_id","start_date")
);

-- CreateTable
CREATE TABLE "module" (
    "module_id" SERIAL NOT NULL,
    "module_name" TEXT NOT NULL,
    "module_description" TEXT,
    "module_order" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "course_id" TEXT NOT NULL,

    CONSTRAINT "module_pkey" PRIMARY KEY ("module_id")
);

-- CreateTable
CREATE TABLE "Section" (
    "section_id" SERIAL NOT NULL,
    "section_name" TEXT NOT NULL,
    "section_description" TEXT,
    "section_order" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("section_id")
);

-- CreateTable
CREATE TABLE "time_of_day" (
    "time_of_day_id" TEXT NOT NULL,
    "time_of_day_name" TEXT NOT NULL,

    CONSTRAINT "time_of_day_pkey" PRIMARY KEY ("time_of_day_id")
);

-- CreateTable
CREATE TABLE "tuition_language" (
    "tuition_lang_id" TEXT NOT NULL,
    "tuition_lang_name" TEXT NOT NULL,

    CONSTRAINT "tuition_language_pkey" PRIMARY KEY ("tuition_lang_id")
);

-- CreateTable
CREATE TABLE "deck" (
    "deck_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "deck_description" TEXT,

    CONSTRAINT "deck_pkey" PRIMARY KEY ("deck_id")
);

-- CreateTable
CREATE TABLE "card" (
    "card_id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "example" TEXT,
    "course_code" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("card_id")
);

-- CreateTable
CREATE TABLE "user_card" (
    "user_card_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "example" TEXT,
    "lesson_id" INTEGER,

    CONSTRAINT "user_card_pkey" PRIMARY KEY ("user_card_id")
);

-- CreateTable
CREATE TABLE "vocabulary" (
    "vocabulary_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "vocabulary_pkey" PRIMARY KEY ("vocabulary_id")
);

-- CreateTable
CREATE TABLE "vocabulary_inbox" (
    "user_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "vocabulary_inbox_pkey" PRIMARY KEY ("user_id","question")
);

-- CreateTable
CREATE TABLE "booking_request" (
    "booking_request_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "booking_date" TIMESTAMP(3) NOT NULL,
    "booking_request_status" "BookingRequestStatus" NOT NULL DEFAULT 'PENDING',
    "user_stated_name" TEXT,
    "user_stated_phone" TEXT,
    "user_stated_email" TEXT,
    "user_stated_telegram_nickname" TEXT,

    CONSTRAINT "booking_request_pkey" PRIMARY KEY ("booking_request_id")
);

-- CreateTable
CREATE TABLE "class_homework" (
    "class_task_id" SERIAL NOT NULL,
    "course_task_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "class_homework_pkey" PRIMARY KEY ("class_task_id")
);

-- CreateTable
CREATE TABLE "student" (
    "student_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "student_nickname" TEXT,
    "enrolled_date" TIMESTAMP(3),
    "left_date" TIMESTAMP(3),
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "student_answer" (
    "student_answer_id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "class_task_id" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "student_answer_pkey" PRIMARY KEY ("student_answer_id")
);

-- CreateTable
CREATE TABLE "student_task" (
    "student_task_id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "class_task_id" INTEGER NOT NULL,
    "task_status" "StudentTaskStatus" NOT NULL,

    CONSTRAINT "student_task_pkey" PRIMARY KEY ("student_task_id")
);

-- CreateTable
CREATE TABLE "task" (
    "task_id" SERIAL NOT NULL,
    "task_description" TEXT,
    "task_text" TEXT,
    "task_type_id" INTEGER NOT NULL,
    "task_context_id" TEXT NOT NULL,
    "task_form_id" INTEGER,
    "task_created_date" TIMESTAMP(3),
    "task_updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "lesson_id" INTEGER NOT NULL,
    "gap_map" TEXT,

    CONSTRAINT "task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "task_form" (
    "task_form_id" SERIAL NOT NULL,
    "task_form_name" TEXT NOT NULL,
    "task_form_description" TEXT,

    CONSTRAINT "task_form_pkey" PRIMARY KEY ("task_form_id")
);

-- CreateTable
CREATE TABLE "task_context" (
    "task_context_id" TEXT NOT NULL,
    "task_context_name" TEXT NOT NULL,
    "task_context_description" TEXT,

    CONSTRAINT "task_context_pkey" PRIMARY KEY ("task_context_id")
);

-- CreateTable
CREATE TABLE "task_options" (
    "task_option_id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "task_option_text" TEXT NOT NULL,
    "task_option_order" INTEGER,
    "is_correct" BOOLEAN NOT NULL,

    CONSTRAINT "task_options_pkey" PRIMARY KEY ("task_option_id")
);

-- CreateTable
CREATE TABLE "task_type" (
    "task_type_id" SERIAL NOT NULL,
    "task_type_name" TEXT NOT NULL,
    "task_type_description" TEXT,

    CONSTRAINT "task_type_pkey" PRIMARY KEY ("task_type_id")
);

-- CreateTable
CREATE TABLE "_TaskToTaskForm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MeetingKind_meeting_kind_name_key" ON "MeetingKind"("meeting_kind_name");

-- CreateIndex
CREATE UNIQUE INDEX "class_size_class_size_name_key" ON "class_size"("class_size_name");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_lesson_name_key" ON "lesson"("lesson_name");

-- CreateIndex
CREATE UNIQUE INDEX "module_module_name_key" ON "module"("module_name");

-- CreateIndex
CREATE UNIQUE INDEX "Section_section_name_key" ON "Section"("section_name");

-- CreateIndex
CREATE UNIQUE INDEX "time_of_day_time_of_day_name_key" ON "time_of_day"("time_of_day_name");

-- CreateIndex
CREATE UNIQUE INDEX "tuition_language_tuition_lang_name_key" ON "tuition_language"("tuition_lang_name");

-- CreateIndex
CREATE UNIQUE INDEX "_TaskToTaskForm_AB_unique" ON "_TaskToTaskForm"("A", "B");

-- CreateIndex
CREATE INDEX "_TaskToTaskForm_B_index" ON "_TaskToTaskForm"("B");

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_application_preferences" ADD CONSTRAINT "user_application_preferences_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_application_preferences" ADD CONSTRAINT "user_application_preferences_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "Application"("application_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_removal_request" ADD CONSTRAINT "data_removal_request_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_structure" ADD CONSTRAINT "course_structure_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_structure" ADD CONSTRAINT "course_structure_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_structure" ADD CONSTRAINT "course_structure_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_structure" ADD CONSTRAINT "course_structure_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_classSizeClass_size_id_fkey" FOREIGN KEY ("classSizeClass_size_id") REFERENCES "class_size"("class_size_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_time_of_day_id_fkey" FOREIGN KEY ("time_of_day_id") REFERENCES "time_of_day"("time_of_day_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_tuition_lang_id_fkey" FOREIGN KEY ("tuition_lang_id") REFERENCES "tuition_language"("tuition_lang_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_call" ADD CONSTRAINT "class_call_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_call" ADD CONSTRAINT "class_call_meeting_kind_id_fkey" FOREIGN KEY ("meeting_kind_id") REFERENCES "MeetingKind"("meeting_kind_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_course_level_id_fkey" FOREIGN KEY ("course_level_id") REFERENCES "course_level"("course_level_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_advice" ADD CONSTRAINT "course_advice_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_levels_per_subject" ADD CONSTRAINT "course_levels_per_subject_course_level_id_fkey" FOREIGN KEY ("course_level_id") REFERENCES "course_level"("course_level_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_levels_per_subject" ADD CONSTRAINT "course_levels_per_subject_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_moduleModule_id_fkey" FOREIGN KEY ("moduleModule_id") REFERENCES "module"("module_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor" ADD CONSTRAINT "mentor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentors_classes" ADD CONSTRAINT "mentors_classes_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentors_classes" ADD CONSTRAINT "mentors_classes_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor_pay_model" ADD CONSTRAINT "mentor_pay_model_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mentor_pay_model" ADD CONSTRAINT "mentor_pay_model_class_size_id_fkey" FOREIGN KEY ("class_size_id") REFERENCES "class_size"("class_size_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "module" ADD CONSTRAINT "module_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deck" ADD CONSTRAINT "deck_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "deck"("deck_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_card" ADD CONSTRAINT "user_card_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_card" ADD CONSTRAINT "user_card_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_inbox" ADD CONSTRAINT "vocabulary_inbox_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_request" ADD CONSTRAINT "booking_request_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_homework" ADD CONSTRAINT "class_homework_course_task_id_fkey" FOREIGN KEY ("course_task_id") REFERENCES "CourseTask"("course_task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_homework" ADD CONSTRAINT "class_homework_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_answer" ADD CONSTRAINT "student_answer_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_answer" ADD CONSTRAINT "student_answer_class_task_id_fkey" FOREIGN KEY ("class_task_id") REFERENCES "class_homework"("class_task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_task" ADD CONSTRAINT "student_task_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_task" ADD CONSTRAINT "student_task_class_task_id_fkey" FOREIGN KEY ("class_task_id") REFERENCES "class_homework"("class_task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_task_type_id_fkey" FOREIGN KEY ("task_type_id") REFERENCES "task_type"("task_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_task_context_id_fkey" FOREIGN KEY ("task_context_id") REFERENCES "task_context"("task_context_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_options" ADD CONSTRAINT "task_options_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToTaskForm" ADD CONSTRAINT "_TaskToTaskForm_A_fkey" FOREIGN KEY ("A") REFERENCES "task"("task_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToTaskForm" ADD CONSTRAINT "_TaskToTaskForm_B_fkey" FOREIGN KEY ("B") REFERENCES "task_form"("task_form_id") ON DELETE CASCADE ON UPDATE CASCADE;
