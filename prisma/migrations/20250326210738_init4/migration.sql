/*
  Warnings:

  - You are about to drop the column `service` on the `ServicePageEnquiry` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `ServicePageEnquiry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServicePageEnquiry" DROP COLUMN "service",
ADD COLUMN     "serviceId" TEXT NOT NULL;
