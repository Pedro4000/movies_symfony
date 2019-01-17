-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 23 Novembre 2018 à 17:25
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `API`
--

-- --------------------------------------------------------

--
-- Structure de la table `Comments`
--

CREATE TABLE `Comments` (
  `Id` int(11) NOT NULL,
  `UserFirstName` varchar(50) NOT NULL,
  `MovieId` int(11) NOT NULL,
  `Content` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Comments`
--

INSERT INTO `Comments` (`Id`, `UserFirstName`, `MovieId`, `Content`) VALUES
(1, 'ffff', 260513, 'blajifoezzjfioezjfioz'),
(2, 'ffff', 260513, 'blajifoezzjfioezjfioz'),
(3, 'ffff', 260513, 'blajifoezzjfioezjfioz');

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(150) NOT NULL,
  `familyName` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Users`
--

INSERT INTO `Users` (`id`, `firstName`, `familyName`, `password`, `email`) VALUES
(21, 'aaaaaaaa', 'aaaaaaaa', '$2y$11$f45ec6c1103f8361c06ddOyZfcqsM4STweXTWj7dW5HqefS7Sx3D2', 'aaaaaaaa'),
(22, 'fdsfdsfds', 'fdsf', '$2y$11$db2032dd2e51f39314011OeMF2B7q.EZ9j7Ca5ve1rbTqdAQI1nkC', 'rootfdsfds'),
(32, 'kjh;kjh;kj', 'h;kjh;kjh', '$2y$11$ecf647a95a59d5a86c7f3eXPmlEj/4Q5C4.XpKF7vY5mUzJ2rm9jS', 'ythyjhyroot;kjh;jkj'),
(35, 'gfdsgfds', 'gfdsgfds', '$2y$11$65d03c6d7d787e511fd88uq75VCc2YJwxK3PQaVTXlHsQyqv/CWi2', 'gfdsgfdsg'),
(37, 'fjizoefjeiozj', 'fjiozjeioz', '$2y$11$177b595647ad6c791876ceMFOD7VLDVl3cReCgI/564umZQQsGs5C', 'Pedro'),
(38, 'ffff', 'ffff', '$2y$11$e513ffd31ae7e17dc7297OKdyqgrbym4pJjaZUKuS6Qei.xnm8EXe', 'rootfdsfds'),
(39, 'ffffffff', 'ffffffffffff', '$2y$11$5956ab0630d7366d09262OS69iSTiXkAsIkzXWnyktxHnlQv3YJLC', 'aaaaaaaa'),
(40, 'trytrytry', 'ytrytry', '$2y$11$c88524698694758b75b6bO/ToGjf1GSNiD6D9/sXTOu1AaLnNhHhe', 'ytrytr'),
(44, 'fezfezfez', 'feezfez', '$2y$11$34a9413748942695cc5c4uP4umdtS/gwsrFHtLXdAwU3679F1gwd6', 'fezfzefez'),
(45, 'fdsgfdsgfds', 'gfdsgfdsgfds', '$2y$11$ec0079da2ebca8deafa6cuBY1CRHyDlKL9BIFIzDBZ/lK8pGvOZlm', 'fdsgfdsgfds'),
(46, 'ffffffffffffff', 'ffffffffffff', '$2y$11$c858185c76e8ef9228090uAI3iigmfShK6An/PY2GDRv6RCZDyQKq', 'ffffffffffffff'),
(47, 'gfdgfdgf', 'gfdgfdgfd', '$2y$11$ca0e4bad78f3e0f13d4d1u4lErAB/stUOnFMDlh2YHO5L9f6zPnp.', 'fdgfdgfdgfd'),
(48, 'egregreg', 'Pedrogfrgr', '$2y$11$ebc883aaf7006d757927debuyZmYoUuo6oxN7sD0nixQIYnuOgkPS', 'gregregreg'),
(49, 'ggg', 'Pierregg', '$2y$11$35c63178696054780eed1OuVaCgv6hAtULOBeN4su5BR/NJz49RFC', 'ggggggggggggggg'),
(50, 'aaa', 'aaa', '$2y$11$2dd56b0160858f7b00fb6uTaQlTOSXQod5Odde0u0NFOavdhd74oW', 'a'),
(51, 'gggfdgfd', 'Pedrog', '$2y$11$03893f8a9b5eb1bb9363aOCry5rVy5TTPpUGHA0huqhaMRhqapvPS', 'gfdgfdgfd');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
