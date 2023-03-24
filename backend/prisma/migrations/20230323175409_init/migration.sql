/*
  Warnings:

  - Added the required column `contrasena` to the `registro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `registro` ADD COLUMN `contrasena` VARCHAR(50) NOT NULL;
