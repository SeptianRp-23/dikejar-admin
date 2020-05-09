-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2020 at 12:36 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kejar`
--

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id_lokasi` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id_lokasi`, `nama`) VALUES
(1001, 'Pasar Minggu'),
(1002, 'Lenteng Agung'),
(1003, 'Condet'),
(1004, 'Gedong'),
(1005, 'Tanjung Barat'),
(1006, 'Pasar Rebo'),
(1007, 'Cijantung');

-- --------------------------------------------------------

--
-- Table structure for table `mesin`
--

CREATE TABLE `mesin` (
  `id_mesin` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mesin`
--

INSERT INTO `mesin` (`id_mesin`, `nama`) VALUES
(1001, 'BCA'),
(1002, 'MANDIRI'),
(1003, 'LINK'),
(1004, 'CIMB'),
(1005, 'DKI');

-- --------------------------------------------------------

--
-- Table structure for table `no_mesin`
--

CREATE TABLE `no_mesin` (
  `id_serial` int(11) NOT NULL,
  `id_mesin` int(11) NOT NULL,
  `no_key` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `no_mesin`
--

INSERT INTO `no_mesin` (`id_serial`, `id_mesin`, `no_key`) VALUES
(1, 1001, 'BCA202010001'),
(2, 1001, 'BCA202010002'),
(3, 1002, 'MANDIRI202010001'),
(4, 1002, 'MANDIRI202010002'),
(5, 1003, 'LINK202010001'),
(6, 1001, 'BCA202010003'),
(7, 1002, 'MANDIRI202010003'),
(8, 1004, 'CIMB202010001'),
(9, 1002, 'MANDIRI202010004'),
(10, 1005, 'DKI202010001');

-- --------------------------------------------------------

--
-- Table structure for table `tempat`
--

CREATE TABLE `tempat` (
  `id_tempat` int(11) NOT NULL,
  `id_lokasi` int(11) NOT NULL,
  `nama_tempat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tempat`
--

INSERT INTO `tempat` (`id_tempat`, `id_lokasi`, `nama_tempat`) VALUES
(1, 1001, 'Alfamart Stasiun'),
(2, 1001, 'SPBU'),
(3, 1002, 'Indomaret Stasiun'),
(4, 1003, 'Alfamart'),
(5, 1003, 'Indomart'),
(6, 1003, 'SPBU'),
(7, 1004, 'Jempol Caffe'),
(8, 1004, 'Indomaret'),
(9, 1005, 'Indomaret Stasiun'),
(10, 1005, 'Alfamart'),
(11, 1007, 'Indomart'),
(12, 1007, 'SPBU'),
(13, 1006, 'Terminal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id_lokasi`);

--
-- Indexes for table `mesin`
--
ALTER TABLE `mesin`
  ADD PRIMARY KEY (`id_mesin`);

--
-- Indexes for table `no_mesin`
--
ALTER TABLE `no_mesin`
  ADD PRIMARY KEY (`id_serial`);

--
-- Indexes for table `tempat`
--
ALTER TABLE `tempat`
  ADD PRIMARY KEY (`id_tempat`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id_lokasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1008;

--
-- AUTO_INCREMENT for table `mesin`
--
ALTER TABLE `mesin`
  MODIFY `id_mesin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1006;

--
-- AUTO_INCREMENT for table `no_mesin`
--
ALTER TABLE `no_mesin`
  MODIFY `id_serial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tempat`
--
ALTER TABLE `tempat`
  MODIFY `id_tempat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
