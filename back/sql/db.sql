-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 19 Février 2020 à 08:44
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `farmviz`
--
CREATE DATABASE IF NOT EXISTS `farmviz` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `farmviz`;

-- --------------------------------------------------------

--
-- Structure de la table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `newsletters`
--

INSERT INTO `newsletters` (`id`, `email`) VALUES(2, 'lam@aol.comme');
INSERT INTO `newsletters` (`id`, `email`) VALUES(3, 'lam@aol.com');
INSERT INTO `newsletters` (`id`, `email`) VALUES(4, 'lam@aol.co');
INSERT INTO `newsletters` (`id`, `email`) VALUES(5, 'lam@aol.c');

-- --------------------------------------------------------

--
-- Structure de la table `traduction`
--

CREATE TABLE `traduction` (
  `id` int(11) NOT NULL,
  `banniere_titre` varchar(255) NOT NULL,
  `banniere_texte` text,
  `banniere_telephone` varchar(16) DEFAULT NULL,
  `navbar_titre` varchar(100) DEFAULT NULL,
  `navbar_status_ste` varchar(30) DEFAULT NULL,
  `navbar_accueil` varchar(50) DEFAULT NULL,
  `navbar_services` varchar(50) DEFAULT NULL,
  `navbar_societes` varchar(50) DEFAULT NULL,
  `navbar_contact` varchar(50) DEFAULT NULL,
  `navbar_language` varchar(10) DEFAULT NULL,
  `offre_titre` varchar(255) DEFAULT NULL,
  `offre_sous_titre` varchar(255) DEFAULT NULL,
  `offre_texte` varchar(255) DEFAULT NULL,
  `offre_texte1` varchar(255) DEFAULT NULL,
  `offre_texte2` varchar(255) DEFAULT NULL,
  `offre_texte3` varchar(255) DEFAULT NULL,
  `offre_texte4` varchar(255) DEFAULT NULL,
  `offre_texte5` varchar(255) DEFAULT NULL,
  `offre_texte6` varchar(255) DEFAULT NULL,
  `offre_texte7` varchar(255) DEFAULT NULL,
  `offre_prix_lancement` varchar(255) DEFAULT NULL,
  `offre_prix_normal` varchar(255) DEFAULT NULL,
  `offre_decouvrir` varchar(255) DEFAULT NULL,
  `offre_precommander` varchar(255) DEFAULT NULL,
  `offre_texte_condition` varchar(255) DEFAULT NULL,
  `offre_lien_condition` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `traduction`
--

INSERT INTO `traduction` (`id`, `banniere_titre`, `banniere_texte`, `banniere_telephone`, `navbar_titre`, `navbar_status_ste`, `navbar_accueil`, `navbar_services`, `navbar_societes`, `navbar_contact`, `navbar_language`, `offre_titre`, `offre_sous_titre`, `offre_texte`, `offre_texte1`, `offre_texte2`, `offre_texte3`, `offre_texte4`, `offre_texte5`, `offre_texte6`, `offre_texte7`, `offre_prix_lancement`, `offre_prix_normal`, `offre_decouvrir`, `offre_precommander`, `offre_texte_condition`, `offre_lien_condition`) VALUES(1, 'La technologie au service de l\'homme et de l\'environnement', 'Service client 6j/7 de 7h à 21h', '02 23 23 52 10', 'FarmViz', 'sas', 'Accueil', 'Services', 'Société', 'Contact', 'Langue', 'PRECOMMANDER', 'votre PACK MOBILE', 'Sonde thermométrie intelligente', '1 sonde mobile de thermométrie', 'Application mobile', 'Service client', 'Garantie 1 an', 'Votre sonde vous suit dans les packs', 'Offre de lancement * ', 'xxxxxxxx', '149 €', '199€', 'Découvrir', 'PRECOMMANDER', '* offre de lancement valable du 24/02/2020 au 31/05/2020 voir', 'conditions générales');
INSERT INTO `traduction` (`id`, `banniere_titre`, `banniere_texte`, `banniere_telephone`, `navbar_titre`, `navbar_status_ste`, `navbar_accueil`, `navbar_services`, `navbar_societes`, `navbar_contact`, `navbar_language`, `offre_titre`, `offre_sous_titre`, `offre_texte`, `offre_texte1`, `offre_texte2`, `offre_texte3`, `offre_texte4`, `offre_texte5`, `offre_texte6`, `offre_texte7`, `offre_prix_lancement`, `offre_prix_normal`, `offre_decouvrir`, `offre_precommander`, `offre_texte_condition`, `offre_lien_condition`) VALUES(2, 'Technology serving people and the environment', 'Customer service 6 days a week from 7 a.m. to 9 p.m.', '02 23 23 52 10', 'FarmViz', 'sas', 'Home', 'Services', 'Companies', 'Contact', 'Language', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `trad_accueil`
--

CREATE TABLE `trad_accueil` (
  `id` int(11) NOT NULL,
  `banniere_titre` varchar(100) DEFAULT NULL,
  `banniere_texte` varchar(100) DEFAULT NULL,
  `banniere_telephone` varchar(100) DEFAULT NULL,
  `nav_titre` varchar(100) DEFAULT NULL,
  `nav_statue_ste` varchar(50) DEFAULT NULL,
  `nav_accueil` varchar(50) DEFAULT NULL,
  `nav_services` varchar(100) DEFAULT NULL,
  `nav_societes` varchar(100) DEFAULT NULL,
  `nav_contact` varchar(100) DEFAULT NULL,
  `nav_language` varchar(100) DEFAULT NULL,
  `offre_titre` varchar(100) DEFAULT NULL,
  `offre_sous_titre` varchar(100) DEFAULT NULL,
  `offre_texte` text,
  `offre_texte1` varchar(100) DEFAULT NULL,
  `offre_texte2` varchar(100) DEFAULT NULL,
  `offre_texte3` varchar(100) DEFAULT NULL,
  `offre_texte4` varchar(100) DEFAULT NULL,
  `offre_texte5` varchar(100) DEFAULT NULL,
  `offre_texte6` varchar(100) DEFAULT NULL,
  `offre_texte7` varchar(100) DEFAULT NULL,
  `offre_prix_lancement` varchar(6) DEFAULT NULL,
  `offre_prix_normal` varchar(6) DEFAULT NULL,
  `offre_decouvrir` varchar(100) DEFAULT NULL,
  `offre_precommander` varchar(100) DEFAULT NULL,
  `offre_texte_condition` varchar(100) DEFAULT NULL,
  `offre_lien_condition` varchar(100) DEFAULT NULL,
  `footer_titre` varchar(100) DEFAULT NULL,
  `footer_telephone` varchar(14) DEFAULT NULL,
  `footer_email` varchar(30) DEFAULT NULL,
  `footer_accueil` varchar(100) DEFAULT NULL,
  `footer_services` varchar(100) DEFAULT NULL,
  `footer_societe` varchar(100) DEFAULT NULL,
  `footer_contact` varchar(100) DEFAULT NULL,
  `footer_newsletter_titre` varchar(100) DEFAULT NULL,
  `footer_newsletter_texte` varchar(100) DEFAULT NULL,
  `footer_newsletter_placeholder` varchar(100) DEFAULT NULL,
  `footer_reseau` varchar(50) DEFAULT NULL,
  `footer_banniere` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `trad_accueil`
--

INSERT INTO `trad_accueil` (`id`, `banniere_titre`, `banniere_texte`, `banniere_telephone`, `nav_titre`, `nav_statue_ste`, `nav_accueil`, `nav_services`, `nav_societes`, `nav_contact`, `nav_language`, `offre_titre`, `offre_sous_titre`, `offre_texte`, `offre_texte1`, `offre_texte2`, `offre_texte3`, `offre_texte4`, `offre_texte5`, `offre_texte6`, `offre_texte7`, `offre_prix_lancement`, `offre_prix_normal`, `offre_decouvrir`, `offre_precommander`, `offre_texte_condition`, `offre_lien_condition`, `footer_titre`, `footer_telephone`, `footer_email`, `footer_accueil`, `footer_services`, `footer_societe`, `footer_contact`, `footer_newsletter_titre`, `footer_newsletter_texte`, `footer_newsletter_placeholder`, `footer_reseau`, `footer_banniere`) VALUES(1, 'La technologie au service de l\'environnement', 'Service client 6J/7 de 7h à 21h ', '0234343434', 'FARMVIZ ', 'sas', 'Accueil', 'Services', 'Societes', 'Contact', 'FR', 'PRES COMMANDER', 'Votre PACK MOBILE', 'Sonde de thermométrie intelligente ', '1 sonde mobile de thermométrie', 'Application mobile', 'Service client', 'Garantie 1 an', 'Votre sonde vous suit dans les packs', 'Offre de lancement *', NULL, '149€', '199€', 'Découvrir', 'PRECOMMANDER', '* Offre de lancement valable du 24/02/2020 au 31/05/2020  voir', 'Condition générales', 'CONTACTEZ-NOUS', '02 24 24 24 24', 'contact@farmviz.fr', 'Accueil', 'Services', 'Société', 'Contact', 'NEWSLETTER', 'Abonnez-vous à nos dernières actualités', 'Adresse email', 'REJOIGNEZ-NOUS', 'Ⓒ Copyright 2019-2020  FARMVIZ SAS.  Tous droits réservés');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `traduction`
--
ALTER TABLE `traduction`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `trad_accueil`
--
ALTER TABLE `trad_accueil`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `traduction`
--
ALTER TABLE `traduction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `trad_accueil`
--
ALTER TABLE `trad_accueil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
