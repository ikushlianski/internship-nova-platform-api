/*
  Warnings:

  - The primary key for the `student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `student_id` column on the `student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `student_id` on the `student_answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `student_id` on the `student_task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_class_id_fkey";

-- DropForeignKey
ALTER TABLE "student_answer" DROP CONSTRAINT "student_answer_student_id_fkey";

-- DropForeignKey
ALTER TABLE "student_task" DROP CONSTRAINT "student_task_student_id_fkey";

-- AlterTable
ALTER TABLE "student" DROP CONSTRAINT "student_pkey",
DROP COLUMN "student_id",
ADD COLUMN     "student_id" SERIAL NOT NULL,
ALTER COLUMN "class_id" DROP NOT NULL,
ADD CONSTRAINT "student_pkey" PRIMARY KEY ("student_id");

-- AlterTable
ALTER TABLE "student_answer" DROP COLUMN "student_id",
ADD COLUMN     "student_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "student_task" DROP COLUMN "student_id",
ADD COLUMN     "student_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("class_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_answer" ADD CONSTRAINT "student_answer_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_task" ADD CONSTRAINT "student_task_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;
