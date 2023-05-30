-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "artwork_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "onFrontpage" BOOLEAN NOT NULL,
    "edition" INTEGER NOT NULL,
    "remaining_edition" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);
