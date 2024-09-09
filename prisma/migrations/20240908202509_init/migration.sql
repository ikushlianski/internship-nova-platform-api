/*
  Warnings:

  - You are about to drop the column `tuition_lang_id` on the `class` table. All the data in the column will be lost.
  - The primary key for the `tuition_language` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tuition_lang_id` on the `tuition_language` table. All the data in the column will be lost.
  - Added the required column `tuition_lang_code` to the `class` table without a default value. This is not possible if the table is not empty.
  - The required column `tuition_lang_code` was added to the `tuition_language` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "class" DROP CONSTRAINT "class_tuition_lang_id_fkey";

-- AlterTable
ALTER TABLE "class" DROP COLUMN "tuition_lang_id",
ADD COLUMN     "tuition_lang_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tuition_language" DROP CONSTRAINT "tuition_language_pkey",
DROP COLUMN "tuition_lang_id",
ADD COLUMN     "tuition_lang_code" TEXT NOT NULL,
ADD CONSTRAINT "tuition_language_pkey" PRIMARY KEY ("tuition_lang_code");

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_tuition_lang_code_fkey" FOREIGN KEY ("tuition_lang_code") REFERENCES "tuition_language"("tuition_lang_code") ON DELETE RESTRICT ON UPDATE CASCADE;
