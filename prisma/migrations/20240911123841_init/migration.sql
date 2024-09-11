-- CreateTable
CREATE TABLE "users" (
    "user_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "nickname" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_email")
);

-- CreateTable
CREATE TABLE "deck_tests" (
    "deck_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "deck_description" TEXT,

    CONSTRAINT "deck_tests_pkey" PRIMARY KEY ("deck_id")
);

-- CreateTable
CREATE TABLE "user_card_tests" (
    "user_card_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "example" TEXT,

    CONSTRAINT "user_card_tests_pkey" PRIMARY KEY ("user_card_id")
);

-- AddForeignKey
ALTER TABLE "deck_tests" ADD CONSTRAINT "deck_tests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_card_tests" ADD CONSTRAINT "user_card_tests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_card_tests" ADD CONSTRAINT "user_card_tests_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "deck_tests"("deck_id") ON DELETE RESTRICT ON UPDATE CASCADE;
