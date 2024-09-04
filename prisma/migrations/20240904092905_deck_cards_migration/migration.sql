-- CreateTable
CREATE TABLE "MemoDeck" (
    "deck_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "deck_name" TEXT NOT NULL,
    "deck_description" TEXT,
    "parent_id" TEXT,

    CONSTRAINT "MemoDeck_pkey" PRIMARY KEY ("deck_id")
);

-- CreateTable
CREATE TABLE "MemoCard" (
    "card_id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT,
    "created_date" TEXT,
    "updated_date" TEXT,
    "due_date" TEXT,
    "lapses" TEXT,

    CONSTRAINT "MemoCard_pkey" PRIMARY KEY ("card_id")
);

-- AddForeignKey
ALTER TABLE "MemoDeck" ADD CONSTRAINT "MemoDeck_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "MemoDeck"("deck_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemoDeck" ADD CONSTRAINT "MemoDeck_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemoCard" ADD CONSTRAINT "MemoCard_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "MemoDeck"("deck_id") ON DELETE RESTRICT ON UPDATE CASCADE;
