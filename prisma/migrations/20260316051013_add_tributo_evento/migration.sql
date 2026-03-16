/*
  Warnings:

  - Added the required column `evento` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participante" ADD COLUMN     "evento" TEXT NOT NULL;
