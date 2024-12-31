/*
  Warnings:

  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "blog";

-- CreateTable
CREATE TABLE "note" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "important" BOOLEAN,
    "date" TIMESTAMP(3),

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);
