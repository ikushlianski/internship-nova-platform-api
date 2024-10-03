/*
  Warnings:

  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseTask" DROP CONSTRAINT "CourseTask_section_id_fkey";

-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_module_id_fkey";

-- DropForeignKey
ALTER TABLE "course_structure" DROP CONSTRAINT "course_structure_section_id_fkey";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_section_id_fkey";

-- DropTable
DROP TABLE "Section";

-- CreateTable
CREATE TABLE "section" (
    "section_id" SERIAL NOT NULL,
    "section_name" TEXT NOT NULL,
    "section_description" TEXT,
    "section_order" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "module_id" INTEGER NOT NULL,

    CONSTRAINT "section_pkey" PRIMARY KEY ("section_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "section_section_name_key" ON "section"("section_name");

-- AddForeignKey
ALTER TABLE "course_structure" ADD CONSTRAINT "course_structure_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTask" ADD CONSTRAINT "CourseTask_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section" ADD CONSTRAINT "section_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "module"("module_id") ON DELETE RESTRICT ON UPDATE CASCADE;
