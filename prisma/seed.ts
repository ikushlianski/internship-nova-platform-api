import {
  courses,
  courseLevels,
  subjects,
  taskContexts,
  taskForms,
  taskTypes,
  tuitionLanguages,
  courseLevelsPerSubject,
  modules,
  sections,
  lessons,
  tasks,
  taskOptions,
} from './sampleData';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// write data:
async function up() {
  console.log('Seeding data');
  await prisma.subject.createMany({ data: subjects });
  await prisma.tuitionLang.createMany({ data: tuitionLanguages });
  await prisma.taskContext.createMany({ data: taskContexts });
  await prisma.taskType.createMany({ data: taskTypes });
  await prisma.taskForm.createMany({ data: taskForms });
  await prisma.courseLevel.createMany({ data: courseLevels });
  await prisma.courseLevelsPerSubject.createMany({
    data: courseLevelsPerSubject,
  });
  await prisma.course.createMany({ data: courses });
  await prisma.module.createMany({ data: modules });
  await prisma.section.createMany({ data: sections });
  await prisma.lesson.createMany({ data: lessons });
  await prisma.task.createMany({ data: tasks });
  await prisma.taskOption.createMany({ data: taskOptions });
  console.log('Data seeded');
}

// clear data:
async function down() {
  console.log('Clearing data');
  await prisma.$executeRaw`TRUNCATE TABLE "subject" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "tuition_language" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "task_context" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "task_type" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "task_form" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "course_level" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "course_levels_per_subject" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "course" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "module" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "section" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "lesson" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "task" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "task_options" RESTART IDENTITY CASCADE`;
  console.log('Data cleared');
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
    console.log('Seed completed successfully');
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
