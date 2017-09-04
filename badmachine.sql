-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-09-04 17:22:24
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `badmachine`
--

-- --------------------------------------------------------

--
-- 表的结构 `allmachine`
--

CREATE TABLE IF NOT EXISTS `allmachine` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `describe` varchar(200) NOT NULL,
  `reason` varchar(200) NOT NULL,
  `repairContent` varchar(200) NOT NULL,
  `number` varchar(200) NOT NULL,
  `breakoutTime` varchar(30) NOT NULL,
  `createUser` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=32 ;

--
-- 转存表中的数据 `allmachine`
--

INSERT INTO `allmachine` (`id`, `name`, `describe`, `reason`, `repairContent`, `number`, `breakoutTime`, `createUser`) VALUES
(1, '注塑机', '顶出油缸漏油', '顶出油缸螺丝松动，断裂导致漏油', '更换顶出油缸断裂螺丝', '', '2017-08-28', 'yzj'),
(31, '2', '2', '2', '', '2', '2017-08-31 22:44:08', 'yzj');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
