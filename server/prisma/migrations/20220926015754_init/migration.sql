-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `id` VARCHAR(191) NOT NULL,
    `application_no` VARCHAR(191) NOT NULL,
    `customer_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `salutation` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `mobile_no` VARCHAR(191) NOT NULL,
    `email_id` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `document_type_1` VARCHAR(191) NOT NULL,
    `document_no_1` VARCHAR(191) NOT NULL,
    `document_file_name_1` VARCHAR(191) NOT NULL,
    `document_type_2` VARCHAR(191) NOT NULL,
    `document_no_2` VARCHAR(191) NOT NULL,
    `document_file_name_2` VARCHAR(191) NOT NULL,
    `document_type_3` VARCHAR(191) NOT NULL,
    `document_no_3` VARCHAR(191) NOT NULL,
    `document_file_name_3` VARCHAR(191) NOT NULL,
    `billing_estb_name` VARCHAR(191) NOT NULL,
    `billing_street` VARCHAR(191) NOT NULL,
    `billing_zone` VARCHAR(191) NOT NULL,
    `billing_area` VARCHAR(191) NOT NULL,
    `billing_locality` VARCHAR(191) NOT NULL,
    `billing_postal_code` VARCHAR(191) NOT NULL,
    `billing_city` VARCHAR(191) NOT NULL,
    `billing_region` VARCHAR(191) NOT NULL,
    `billing_country` VARCHAR(191) NOT NULL,
    `pickup_estb_name` VARCHAR(191) NOT NULL,
    `pickup_street` VARCHAR(191) NOT NULL,
    `pickup_zone` VARCHAR(191) NOT NULL,
    `pickup_area` VARCHAR(191) NOT NULL,
    `pickup_locality` VARCHAR(191) NOT NULL,
    `pickup_postal_code` VARCHAR(191) NOT NULL,
    `pickup_city` VARCHAR(191) NOT NULL,
    `pickup_region` VARCHAR(191) NOT NULL,
    `pickup_country` VARCHAR(191) NOT NULL,
    `daily_wastage` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `customer_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
