-- CreateTable
CREATE TABLE "Apology" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "offenses" TEXT[],
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Apology_pkey" PRIMARY KEY ("id")
);
