-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "price" SMALLINT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
