-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: ioasys
-- ------------------------------------------------------
-- Server version	10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enterprise`
--

DROP TABLE IF EXISTS `enterprise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enterprise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enterprise_type_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email_enterprise` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `own_enterprise` tinyint(1) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `value` float NOT NULL,
  `share_price` float NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_enterprise` (`email_enterprise`),
  UNIQUE KEY `facebook` (`facebook`),
  UNIQUE KEY `twitter` (`twitter`),
  UNIQUE KEY `linkedin` (`linkedin`),
  UNIQUE KEY `phone` (`phone`),
  KEY `enterprise_type_id` (`enterprise_type_id`),
  CONSTRAINT `enterprise_ibfk_1` FOREIGN KEY (`enterprise_type_id`) REFERENCES `enterprise_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enterprise`
--

LOCK TABLES `enterprise` WRITE;
/*!40000 ALTER TABLE `enterprise` DISABLE KEYS */;
INSERT INTO `enterprise` VALUES (2,1,'','','','','','',0,'/uploads/enterprise/photo/1/wood_trees_gloomy_fog_haze_darkness_50175_1920x1080.jpg','','Santiago','Chile',0,5000,'Urbanatika is a socio-environmental company with economic impact, creator of the agro-urban industry. We want to involve people in the processes of healthy eating, recycling and reuse of organic waste and the creation of citizen green areas. With this we ','2020-06-08 00:56:21','2020-06-08 00:56:21'),(10,2,'','NaN','1','1','1','1',0,'/uploads/enterprise/photo/2/WhatsApp_Image_2017-10-31_at_13.47.22.jpeg','','Viña del Mar','Chile',0,5000,'Alpaca Samka uses alpaca fibres for our “Slow Fashion Project” in association with the Aymaras of the Chilean Andes, producing sustainable luxury accessories and garments using traditional Andean methods and British weaving patterns. We are part of the In','2020-06-08 01:01:58','2020-06-08 01:01:58');
/*!40000 ALTER TABLE `enterprise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enterprise_type`
--

DROP TABLE IF EXISTS `enterprise_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `enterprise_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `enterprise_type_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enterprise_type`
--

LOCK TABLES `enterprise_type` WRITE;
/*!40000 ALTER TABLE `enterprise_type` DISABLE KEYS */;
INSERT INTO `enterprise_type` VALUES (1,'Software','2020-06-08 00:55:15','2020-06-08 00:55:15'),(2,'Fashion','2020-06-08 00:55:32','2020-06-08 00:55:32'),(3,'Service','2020-06-08 00:55:38','2020-06-08 00:55:38'),(4,'Agro','2020-06-08 00:56:05','2020-06-08 00:56:05'),(5,'Media','2020-06-08 00:56:10','2020-06-08 00:56:10');
/*!40000 ALTER TABLE `enterprise_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20200606053305-create-users.js'),('20200606053359-create-enterprise_type.js'),('20200606053424-create-enterprises.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `investor_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `balance` float NOT NULL,
  `portfolio_value` float NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `first_access` tinyint(1) NOT NULL,
  `super_angel` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Teste Apple','testeapple@ioasys.com.br','BH','Brasil',350000,0,'/uploads/investor/photo/1/cropped4991818370070749122.jpg','12341234',0,0,'0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-07 22:16:56
