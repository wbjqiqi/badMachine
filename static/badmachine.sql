-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-11-04 16:50:23
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `badmachine`
--

-- --------------------------------------------------------

--
-- 表的结构 `allmachine`
--

CREATE TABLE `allmachine` (
  `id` int(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `describe` varchar(200) NOT NULL,
  `reason` varchar(200) NOT NULL,
  `repairContent` varchar(200) NOT NULL,
  `number` varchar(200) NOT NULL,
  `breakoutTime` varchar(30) NOT NULL,
  `createUser` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `allmachine`
--

INSERT INTO `allmachine` (`id`, `name`, `describe`, `reason`, `repairContent`, `number`, `breakoutTime`, `createUser`) VALUES
(1, '注塑机', '顶出油缸漏油', '顶出油缸螺丝松动，断裂导致漏油', '更换顶出油缸断裂螺丝', '123', '2017-08-28', 'yzj'),
(50, '注塑机', '', '', '', '', '权威', 'yzj'),
(51, '机械手', '', '', '', '', '', 'yzj'),
(52, '机械手', '', '', '', '', '', 'yzj'),
(53, '注塑机', '', '', '', '', '', 'yzj');

-- --------------------------------------------------------

--
-- 表的结构 `machinetype`
--

CREATE TABLE `machinetype` (
  `id` int(10) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `createUser` varchar(10) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `machinetype`
--

INSERT INTO `machinetype` (`id`, `name`, `createUser`) VALUES
(1, '注塑机', 'yzj'),
(2, '机械手', 'yzj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allmachine`
--
ALTER TABLE `allmachine`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `machinetype`
--
ALTER TABLE `machinetype`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `allmachine`
--
ALTER TABLE `allmachine`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- 使用表AUTO_INCREMENT `machinetype`
--
ALTER TABLE `machinetype`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
