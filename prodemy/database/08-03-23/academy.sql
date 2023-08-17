-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2023 at 03:13 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `academy`
--

-- --------------------------------------------------------

--
-- Table structure for table `course_tbl`
--

CREATE TABLE `course_tbl` (
  `id` int(11) NOT NULL,
  `courseName` varchar(155) NOT NULL,
  `courseDesc` longtext NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `enrollees` int(100) NOT NULL,
  `skillsToLearn` longtext NOT NULL,
  `overviewId` int(11) NOT NULL,
  `courseContentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course_tbl`
--

INSERT INTO `course_tbl` (`id`, `courseName`, `courseDesc`, `thumbnail`, `date_created`, `enrollees`, `skillsToLearn`, `overviewId`, `courseContentId`) VALUES
(1, 'Course 1', 'Course 1 description', 'thumbnail1.jpg', '2023-06-28 16:00:00', 50, 'Python programming, test', 1, 1),
(2, 'Course 2', 'Course 2 description', 'thumbnail2.jpg', '2023-06-29 16:00:00', 25, 'Communication skills, test', 2, 2),
(3, 'Course 3', 'Course 3 description', 'thumbnail3.jpg', '2023-06-30 16:00:00', 10, 'Communication skills, test', 3, 3),
(4, 'Course 4', 'Proweaver is a custom web design, web development, and digital marketing company with excellent years of productive experience in the industry since it was founded in 2005.', 'thumbnail4.jpg', '2023-07-01 16:00:00', 35, 'Calculus, Statistics, Communication skills, Painting techniques, Historical analysis', 4, 4),
(5, 'Course 5', 'Course 5 description', 'thumbnail5.jpg', '2023-07-02 16:00:00', 15, 'Painting techniques, test', 5, 5),
(6, 'Course 6', 'Course 6 description', 'thumbnail6.jpg', '2023-07-03 16:00:00', 20, 'World History', 6, 6),
(7, 'Course 7', 'Course 7 description', 'thumbnail7.jpg', '2023-07-04 16:00:00', 30, 'Calculus, Statistics, Communication skills, Painting techniques, Historical analysis', 7, 7),
(8, 'Course 8', 'Course 8 description', 'thumbnail8.jpg', '2023-07-05 16:00:00', 40, 'Communication skills, test', 8, 8),
(9, 'Course 9', 'Course 9 description', 'thumbnail9.jpg', '2023-07-06 16:00:00', 5, 'Python programming, test', 9, 9),
(10, 'Course 10', 'Course 10 description', 'thumbnail10.jpg', '2023-07-07 16:00:00', 12, 'Painting techniques, test', 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `module_content_tbl`
--

CREATE TABLE `module_content_tbl` (
  `id` int(11) NOT NULL,
  `moduleId` int(11) NOT NULL,
  `moduleNameContent` varchar(155) NOT NULL,
  `content` longtext NOT NULL,
  `duration` varchar(55) NOT NULL,
  `ContentDateCreated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module_content_tbl`
--

INSERT INTO `module_content_tbl` (`id`, `moduleId`, `moduleNameContent`, `content`, `duration`, `ContentDateCreated`) VALUES
(1, 2, 'Module 1', '{\"lessonAbout\":[{\"lessonOverview\":\"sample video\",\"videoSrc\":\"../../assets/courses/videos/sample1.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]},{\"lessonOverview\":\"About proweaver\",\"videoSrc\":\"../../assets/courses/videos/sample2.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]}]}', '2 minutes', '2023-07-12 16:00:00'),
(2, 1, 'Module 2', '{\"lessonAbout\":[{\"lessonOverview\":\"sample video\",\"videoSrc\":\"../../assets/courses/videos/sample1.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]},{\"lessonOverview\":\"About proweaver\",\"videoSrc\":\"../../assets/courses/videos/sample2.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]}]}', '00:30:00', '2023-07-12 16:00:00'),
(3, 4, 'Module 3', '{\"lessonAbout\":[{\"lessonOverview\":\"Module 3\",\"videoSrc\":\"../../assets/courses/videos/sample1.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]},{\"lessonOverview\":\"About proweaver\",\"videoSrc\":\"../../assets/courses/videos/sample2.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]}]}', '00:05:00', '2023-07-21 01:46:46'),
(4, 4, 'Module 4', '{\"AboutProweaver\":[{\"lessonOverview\":\"sample video\",\"videoSrc\":\"../../assets/courses/videos/sample1.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]},{\"lessonOverview\":\"About proweaver\",\"videoSrc\":\"../../assets/courses/videos/sample2.mp4\",\"transcript\":[{\"startTime\":0,\"endTime\":15,\"text\":\"There\'s so much information and so many ideas flying around the world of sales training these days, particularly around the basics. And so I think that there are different levels of basic, right? There\'s the real Basics. Like how do you look someone in the eye and shake their hand that\'s not what I\'m talking about.\"},{\"startTime\":15,\"endTime\":41,\"text\":\"I\'m talking about real hardcore sales training Basics. We\'re going to assume that you\'re already a human being who knows how to make eye contact who knows how to smile and all that. I\'m talking about what do you do to get in front of your ideal prospects? And what do you do once you\'re actually in front of them to really maximize the likelihood that you\'re actually going to close the sale.\"},{\"startTime\":41,\"endTime\":86,\"text\":\"It\'s so important to get these little pieces, right? So in this video, I\'m going to show you the 11 sales training Basics that beginners must Master check it out. Number one what you\'ve been told before is wrong. I promise you that this is the case whatever someone has told you in the past about what you should be doing in sales is probably wrong now unless that person is a really badass sales manager or salesperson who knows everything about selling if you\'re just going based off what most salespeople think or what most managers think are even quite frankly what. CEOs think about sales that stuff is wrong.\"},{\"startTime\":86,\"endTime\":100,\"text\":\"There is so much old school crap out there that if you just commit to doing the opposite of what most people are telling you you\'re going to be way better off. But of course, what you really want to do is go so much deeper and understand exactly what truly does work in selling number to be the complete opposite of what you think a salesperson is this builds off of that first idea, which is that most of.\"}]}]}', '02:00', '2023-07-28 01:31:17');

-- --------------------------------------------------------

--
-- Table structure for table `module_exam_tbl`
--

CREATE TABLE `module_exam_tbl` (
  `id` int(11) NOT NULL,
  `moduleId` int(11) NOT NULL,
  `questions` longtext NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `anskey` longtext NOT NULL,
  `examDateCreated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module_exam_tbl`
--

INSERT INTO `module_exam_tbl` (`id`, `moduleId`, `questions`, `option1`, `option2`, `anskey`, `examDateCreated`) VALUES
(1, 4, 'What is the top industry that we serve?', 'Healthcare', 'Website Design', 'Healthcare', '2023-07-12 16:00:00'),
(2, 4, 'gwapo ko?', 'yes', 'no', 'yes', '2023-07-25 05:42:02'),
(3, 4, 'taga asa ka jeff?', 'naga', 'mambaling', 'naga', '2023-07-25 05:42:02');

-- --------------------------------------------------------

--
-- Table structure for table `module_tbl`
--

CREATE TABLE `module_tbl` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `moduleName` varchar(155) NOT NULL,
  `description` varchar(155) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module_tbl`
--

INSERT INTO `module_tbl` (`id`, `course_id`, `moduleName`, `description`, `date_created`) VALUES
(1, 1, 'Introduction', 'Learn the basics of Python programming language.', '2022-03-14 16:00:00'),
(2, 2, 'Effective Communication', 'Develop effective communication skills for personal and professional settings.', '2023-01-06 16:00:00'),
(3, 4, 'Advanced Mathematics', 'Explore advanced concepts in calculus and statistics.', '2022-09-21 16:00:00'),
(4, 4, 'Artistic Techniques', 'Master various painting techniques and create stunning artworks.', '2023-06-04 16:00:00'),
(5, 5, 'World History', 'Analyze and interpret historical events and their impact on the world.', '2022-11-29 16:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `taken_course_tbl`
--

CREATE TABLE `taken_course_tbl` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `module_content_id` int(11) NOT NULL,
  `module_exam_id` int(11) NOT NULL,
  `prev_mod_taken` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertbl`
--

CREATE TABLE `usertbl` (
  `Id` int(11) NOT NULL,
  `Name` varchar(55) NOT NULL,
  `Codename` varchar(100) NOT NULL,
  `Teamname` varchar(100) NOT NULL,
  `Interest` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Status` int(11) NOT NULL,
  `Role` int(55) NOT NULL,
  `current_course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertbl`
--

INSERT INTO `usertbl` (`Id`, `Name`, `Codename`, `Teamname`, `Interest`, `Email`, `Password`, `Status`, `Role`, `current_course_id`) VALUES
(2, 'test', 'test123', 'test123', 'Sales', 'bdt@proweaver.net', '$2b$10$jzKwFQ4MPK50L1z27aOpoupcISKmdf09JZ4mNoPvLZR5psMYkLuQi', 0, 0, 4),
(3, 'Jose Marie', 'JmGaming', 'BDT', 'Sales', 'jmylaya9@gmail.com', 'joseylaya2022', 1, 1, 0),
(14, 'jeff123', 'jeff123', 'jeff123', 'Marketing', 'jeff@gmail.com', '123', 1, 1, 0),
(16, 'wow2123', 'wow', 'wow', 'Marketing', 'wow@gmail.com', 'wow', 0, 1, 0),
(17, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(18, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(19, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(20, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(21, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(22, 'test123', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(23, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(24, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(25, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(26, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(27, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(28, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(29, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(30, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(31, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(32, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(33, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(34, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(35, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(36, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(37, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(38, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(39, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(40, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(41, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(42, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(43, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(44, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(45, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(46, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(47, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(48, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(49, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(50, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(51, 'test', 'test', 'ttest', 'Marketing', 'test', 'test', 1, 1, 0),
(52, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 1, 0),
(53, 'test123', 'test123', 'test123', 'Sales', 'test123', 'test123', 1, 1, 0),
(54, 'zxc', 'zxc', 'zxc', 'Marketing', 'zxc', 'zxc', 0, 0, 0),
(55, 'test', 'test', 'test', 'Sales', 'test', '123', 1, 0, 0),
(56, 'test', 'test', 'test', 'Sales', 'test', '123', 1, 0, 0),
(57, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(58, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(59, 'test', 'test', 'test', 'Sales', '123', '123', 1, 1, 0),
(60, 'test', 'test', 'test', 'Sales', '123', '123', 1, 1, 0),
(61, 'test', 'test', 'te', 'Marketing', 'st', 't', 1, 0, 0),
(62, 'test', 'test', 'test', '', 'test', '123', 0, 0, 0),
(63, 'test', '', '', '', '', '', 0, 0, 0),
(64, 'test', '', '', '', '', '', 0, 0, 0),
(65, 'test', '', '', '', '', '', 0, 0, 0),
(66, 'test', '', '', '', '', '', 0, 0, 0),
(67, 'wat', '', '', '', '', '', 0, 0, 0),
(68, 'test', '', '', '', '', '', 0, 0, 0),
(69, 'asd', '', '', '', '', '', 0, 0, 0),
(70, 'asd', '', '', '', '', '', 0, 0, 0),
(71, 'asd', '', '', '', '', '', 0, 0, 0),
(72, 'test', '', '', '', '', '', 0, 0, 0),
(73, 'test', '', '', '', '', '', 0, 0, 0),
(74, 'test', '', '', '', '', '', 0, 0, 0),
(75, 'test', '', '', '', '', '', 0, 0, 0),
(76, 'test', 'test', '123', '', '', '', 0, 0, 0),
(77, 'test', '', '', '', '', '', 0, 0, 0),
(78, 'test', '', '', '', '', '', 0, 0, 0),
(79, 'test', '', '', '', '', '', 0, 0, 0),
(80, 'test', '', '', '', '', '', 0, 0, 0),
(81, 'test', '', '', '', '', '', 0, 0, 0),
(82, 'test', '', '', '', '', '', 0, 0, 0),
(83, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(84, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(85, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(86, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(87, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(88, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(89, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(90, 'test', 'test', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(91, 'test', '123', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(92, 'test', '123', 'test', 'Sales', 'test', 'test', 1, 0, 0),
(93, 'zxc', 'zxc', 'zxc', 'Marketing', 'zxc', 'zxc', 1, 1, 0),
(94, 'test', '', '', '', '', '', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course_tbl`
--
ALTER TABLE `course_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `module_content_tbl`
--
ALTER TABLE `module_content_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `module_exam_tbl`
--
ALTER TABLE `module_exam_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `module_tbl`
--
ALTER TABLE `module_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `taken_course_tbl`
--
ALTER TABLE `taken_course_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertbl`
--
ALTER TABLE `usertbl`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course_tbl`
--
ALTER TABLE `course_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `module_content_tbl`
--
ALTER TABLE `module_content_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `module_exam_tbl`
--
ALTER TABLE `module_exam_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `module_tbl`
--
ALTER TABLE `module_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `taken_course_tbl`
--
ALTER TABLE `taken_course_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertbl`
--
ALTER TABLE `usertbl`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
