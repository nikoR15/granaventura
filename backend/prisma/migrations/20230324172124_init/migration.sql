/*
  Warnings:

  - Added the required column `telefono` to the `registro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `registro` ADD COLUMN `telefono` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `kit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,
    `descripcion` VARCHAR(30) NOT NULL,
    `precio` FLOAT NOT NULL,
    `imagen` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lugares` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,
    `descripcion` VARCHAR(30) NOT NULL,
    `imagen` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,
    `descripcion` VARCHAR(30) NOT NULL,
    `rol` VARCHAR(10) NOT NULL,
    `imagen` VARCHAR(80) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
