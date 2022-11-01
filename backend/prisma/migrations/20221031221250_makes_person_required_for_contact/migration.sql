/*
  Warnings:

  - Made the column `personId` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_personId_fkey";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "personId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
