import { prisma } from './prisma-client';
import { courses_levels, subjects, tuition_languages } from './sampleData';

// write data:
async function up() {
  await prisma.coursesLevel.createMany({ data: courses_levels });
  await prisma.tuitionLanguage.createMany({ data: tuition_languages });
  await prisma.subject.createMany({ data: subjects });
}

// clear data:
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Class" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Course" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CoursesLevel" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CoursesMentors" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CoursesStructures" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Lesson" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Mentor" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Module" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Subject" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "TimeOfDay" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "TuitionLanguage" RESTART IDENTITY CASCADE`;
}

//
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
