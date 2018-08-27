CREATE DATABASE IF NOT EXISTS `burrito`;
USE `burrito`;

CREATE TABLE `burrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(60) NOT NULL,
  `eaten` tinyint(1) NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);