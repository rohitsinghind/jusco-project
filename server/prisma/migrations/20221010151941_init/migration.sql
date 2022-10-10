/*
  Warnings:

  - Added the required column `area` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freq` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileAck` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `area` VARCHAR(191) NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `freq` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobileAck` VARCHAR(191) NOT NULL,
    ADD COLUMN `rate` VARCHAR(191) NOT NULL;
