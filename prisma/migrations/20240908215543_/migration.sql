/*
  Warnings:

  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MeetingKind` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_course_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_module_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_section_id_fkey";

-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_task_id_fkey";

-- DropForeignKey
ALTER TABLE "class_call" DROP CONSTRAINT "class_call_meeting_kind_id_fkey";

-- DropForeignKey
ALTER TABLE "class_homework" DROP CONSTRAINT "class_homework_course_task_id_fkey";

-- DropForeignKey
ALTER TABLE "user_application_preferences" DROP CONSTRAINT "user_application_preferences_application_id_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "updated_at" DROP NOT NULL;

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "CourseTask";

-- DropTable
DROP TABLE "MeetingKind";

-- CreateTable
CREATE TABLE "application" (
    "application_id" TEXT NOT NULL,
    "application_name" TEXT NOT NULL,
    "application_description" TEXT,
    "application_url" TEXT,

    CONSTRAINT "application_pkey" PRIMARY KEY ("application_id")
);

-- CreateTable
CREATE TABLE "meeting_kind" (
    "meeting_kind_id" TEXT NOT NULL,
    "meeting_kind_name" TEXT NOT NULL,

    CONSTRAINT "meeting_kind_pkey" PRIMARY KEY ("meeting_kind_id")
);

-- CreateTable
CREATE TABLE "course_task" (
    "course_task_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "module_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "course_task_pkey" PRIMARY KEY ("course_task_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "meeting_kind_meeting_kind_name_key" ON "meeting_kind"("meeting_kind_name");

-- AddForeignKey
ALTER TABLE "user_application_preferences" ADD CONSTRAINT "user_application_preferences_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "application"("application_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_call" ADD CONSTRAINT "class_call_meeting_kind_id_fkey" FOREIGN KEY ("meeting_kind_id") REFERENCES "meeting_kind"("meeting_kind_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_task" ADD CONSTRAINT "course_task_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "course"("course_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_task" ADD CONSTRAINT "course_task_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_task" ADD CONSTRAINT "course_task_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_task" ADD CONSTRAINT "course_task_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_task" ADD CONSTRAINT "course_task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("task_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_homework" ADD CONSTRAINT "class_homework_course_task_id_fkey" FOREIGN KEY ("course_task_id") REFERENCES "course_task"("course_task_id") ON DELETE RESTRICT ON UPDATE CASCADE;
