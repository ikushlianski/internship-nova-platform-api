-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Spectator', 'Student', 'Teacher', 'Sales', 'Manager', 'Admin');

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" "UserRole" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);
