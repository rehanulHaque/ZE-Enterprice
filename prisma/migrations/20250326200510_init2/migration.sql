/*
  Warnings:

  - Added the required column `productId` to the `ProductPageEnquiry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductPageEnquiry" ADD COLUMN     "productId" TEXT NOT NULL;
