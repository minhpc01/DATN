-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 31, 2024 lúc 05:34 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sailor`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `updatedAt`, `createdAt`, `email`, `phone`) VALUES
(1, 'nam', '$2a$10$TIEqxS.3/7hF/LYRbSq.COy5gEc.VefV4J7vIIYZR1FVfGBOtQAte', '2023-03-17 11:15:20', '2023-03-17 11:15:20', 'gh', '56'),
(2, 'test', '$2a$10$TIEqxS.3/7hF/LYRbSq.COy5gEc.VefV4J7vIIYZR1FVfGBOtQAte', '2023-03-17 11:22:50', '2023-03-17 11:22:50', '', ''),
(3, 'dat', '$2a$10$z0j9J/e6tfn27Lc3oj3aKuHmlgn4fU54G7PJkqR9qSgqNribF92ry', '2023-12-14 15:02:36', '2023-12-14 15:02:36', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`id`, `name`, `content`, `createdAt`, `updatedAt`, `image`) VALUES
(17, 'Astronomy Binoculars A Great Alternative', 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://product.hstatic.net/200000641225/product/upload_66f3cc46d8fc4e92ba45bca3d4ae361a_master.jpg'),
(18, 'The Basics Of Buying A Telescope', 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/7a/4e/04/f9fc7b02d4597ef2f4c6030035f90a5c.jpg'),
(19, 'The Glossary Of Telescopes', 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://sigiaysneaker.com/wp-content/uploads/2020/07/z1971055653973_90574ad60f1091b55615526616e7b2dd.jpg'),
(20, 'The Night Sky', 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://nd-res0.tichluy.vn/Upload/Deals/374/37431_giay-nam-the-thao-sneaker-lacoza-trang-dep-cao-cap_637952187282335740.jpg'),
(21, 'Telescopes 101', 'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'https://vietnamleather.com/wp-content/uploads/2020/11/2-1-390x220.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `totalMoney` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `commune` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `codeCart` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ShippingId` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `userId`, `firstname`, `lastname`, `email`, `phone`, `totalMoney`, `address`, `commune`, `district`, `city`, `codeCart`, `createdAt`, `updatedAt`, `ShippingId`, `paymentId`) VALUES
(8, 9, '', '', 'dat@gmail.com', '9999', 1009794, 'an', '', '', '', '', '2023-02-08 03:07:31', '2024-05-11 11:27:12', 2, 1),
(15, 22, NULL, NULL, 'test@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-02-24 09:19:00', '2024-04-18 10:35:39', 2, NULL),
(16, NULL, '', '', NULL, '06855885', 235360, '01051', '', '', '', '', '2024-05-01 01:50:51', '2024-05-01 01:50:51', NULL, 2),
(20, 9, '', '', 'dat@gmail.com', '777', 1016767, 'pp', '', '', '', '', '2024-05-11 01:44:19', '2024-05-11 10:28:25', NULL, 1),
(28, 9, '', '', 'dat@gmail.com', '55', 1121388, '66', '', '', '', '', '2024-05-11 11:20:25', '2024-05-12 09:34:49', 2, 1),
(29, 9, NULL, NULL, 'dat@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-12 09:43:22', '2024-05-12 10:07:23', 1, NULL),
(30, 9, '', '', 'dat@gmail.com', '7878', 400010, 'nmhk', '', '', '', '', '2024-05-12 10:07:29', '2024-05-12 10:08:57', 2, 2),
(31, 9, NULL, NULL, 'dat@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-12 10:08:57', '2024-05-12 10:08:57', NULL, NULL),
(32, 22, '', '', 'test@gmail.com', '3151d', 300010, '3151e', '', '', '', '', '2024-05-13 16:28:17', '2024-05-31 16:25:14', 2, 2),
(35, 9, '315e4', '', 'dat@gmail.com', '315e5', 300015, '315e6', '', '', '', '', '2024-05-31 17:06:36', '2024-05-31 17:09:39', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_detail`
--

CREATE TABLE `cart_detail` (
  `id` int(11) NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `CartId` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart_detail`
--

INSERT INTO `cart_detail` (`id`, `ProductId`, `CartId`, `qty`, `createdAt`, `updatedAt`) VALUES
(43, 37, 8, 2, '2024-05-05 09:05:12', '2024-05-05 09:05:22'),
(45, 24, 8, 3, '2024-05-11 02:30:48', '2024-05-11 02:30:48'),
(46, 34, 20, 4, '2024-05-11 02:49:05', '2024-05-11 10:14:31'),
(47, 29, 20, 10, '2024-05-11 02:49:05', '2024-05-11 10:28:09'),
(48, 29, 8, 1, '2024-05-11 03:47:59', '2024-05-11 03:47:59'),
(65, 39, 28, 3, '2024-05-11 11:20:25', '2024-05-12 09:33:05'),
(66, 34, 28, 4, '2024-05-11 11:20:32', '2024-05-12 09:33:00'),
(68, 19, 30, 4, '2024-05-12 10:08:37', '2024-05-12 10:08:42'),
(69, 19, 31, 1, '2024-05-13 16:11:37', '2024-05-13 16:11:37'),
(78, 23, 32, 1, '2024-05-31 16:05:43', '2024-05-31 16:05:43'),
(79, 20, 32, 2, '2024-05-31 16:24:44', '2024-05-31 16:24:51'),
(80, 21, 35, 3, '2024-05-31 17:06:36', '2024-05-31 17:09:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Adidas', '2023-03-03 01:22:29', '2023-03-03 01:22:29'),
(2, 'Nike', '2023-03-03 01:22:29', '2023-03-03 01:22:29'),
(3, 'Puma', '2023-03-03 01:27:06', '2023-03-03 01:27:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `infoOrder` text NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `cartId`, `infoOrder`, `createdAt`, `updatedAt`) VALUES
(4, 8, '{\"Product1\":{\"ProductId\":39,\"qty\":1},\"Product2\":{\"ProductId\":29,\"qty\":1},\"Product3\":{\"ProductId\":36,\"qty\":3},\"Product4\":{\"ProductId\":37,\"qty\":2}}', '2024-05-04', '2024-05-04'),
(5, 8, '{\"Product1\":{\"ProductId\":39,\"qty\":1},\"Product2\":{\"ProductId\":29,\"qty\":1},\"Product3\":{\"ProductId\":36,\"qty\":3},\"Product4\":{\"ProductId\":37,\"qty\":2}}', '2024-05-04', '2024-05-04'),
(6, 8, '{\"Product1\":{\"ProductId\":39,\"qty\":1},\"Product2\":{\"ProductId\":29,\"qty\":1},\"Product3\":{\"ProductId\":36,\"qty\":3}}', '2024-05-04', '2024-05-04'),
(7, 8, '{\"Product1\":{\"ProductId\":39,\"qty\":1},\"Product2\":{\"ProductId\":29,\"qty\":1},\"Product3\":{\"ProductId\":36,\"qty\":3},\"Product4\":{\"ProductId\":37,\"qty\":2}}', '2024-05-05', '2024-05-05'),
(8, 8, '{\"Product1\":{\"ProductId\":39,\"qty\":1},\"Product2\":{\"ProductId\":29,\"qty\":1},\"Product3\":{\"ProductId\":36,\"qty\":3},\"Product4\":{\"ProductId\":37,\"qty\":2}}', '2024-05-05', '2024-05-05'),
(9, 8, '{\"Product1\":{\"ProductId\":37,\"qty\":2},\"Product2\":{\"ProductId\":25,\"qty\":2}}', '2024-05-11', '2024-05-11'),
(10, 8, '{\"Product1\":{\"ProductId\":37,\"qty\":2},\"Product2\":{\"ProductId\":24,\"qty\":3},\"Product3\":{\"ProductId\":29,\"qty\":1},\"Product4\":{\"ProductId\":34,\"qty\":3},\"Product5\":{\"ProductId\":29,\"qty\":10},\"Product6\":{\"ProductId\":20,\"qty\":3}}', '2024-05-11', '2024-05-11'),
(11, 8, '{\"Product1\":{\"ProductId\":37,\"qty\":2},\"Product2\":{\"ProductId\":24,\"qty\":3},\"Product3\":{\"ProductId\":34,\"qty\":3},\"Product4\":{\"ProductId\":29,\"qty\":8},\"Product5\":{\"ProductId\":29,\"qty\":1}}', '2024-05-11', '2024-05-11'),
(12, 20, '{\"Product1\":{\"ProductId\":34,\"qty\":4},\"Product2\":{\"ProductId\":29,\"qty\":10}}', '2024-05-11', '2024-05-11'),
(14, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":2},\"Product2\":{\"ProductId\":34,\"qty\":3}}', '2024-05-11', '2024-05-11'),
(15, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":2},\"Product2\":{\"ProductId\":34,\"qty\":6}}', '2024-05-11', '2024-05-11'),
(16, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":2},\"Product2\":{\"ProductId\":34,\"qty\":6}}', '2024-05-12', '2024-05-12'),
(17, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":2},\"Product2\":{\"ProductId\":34,\"qty\":6}}', '2024-05-12', '2024-05-12'),
(18, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":2},\"Product2\":{\"ProductId\":34,\"qty\":6}}', '2024-05-12', '2024-05-12'),
(19, 28, '{\"Product1\":{\"ProductId\":39,\"qty\":3},\"Product2\":{\"ProductId\":34,\"qty\":4}}', '2024-05-12', '2024-05-12'),
(20, 29, '{\"Product1\":{\"ProductId\":21,\"qty\":1}}', '2024-05-12', '2024-05-12'),
(21, 30, '{\"Product1\":{\"ProductId\":19,\"qty\":4}}', '2024-05-12', '2024-05-12'),
(22, 32, '{\"Product1\":{\"ProductId\":23,\"qty\":1},\"Product2\":{\"ProductId\":20,\"qty\":2}}', '2024-05-31', '2024-05-31'),
(23, 35, '{\"Product1\":{\"ProductId\":21,\"qty\":2}}', '2024-05-31', '2024-05-31'),
(24, 35, '{\"Product1\":{\"ProductId\":21,\"qty\":3}}', '2024-05-31', '2024-05-31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `payment`
--

INSERT INTO `payment` (`id`, `method`, `createdAt`, `updatedAt`) VALUES
(5, 'tiền mặt', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'chuyển khoản', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'đw', '2023-03-19 03:28:45', '2023-03-19 03:28:45');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `priceOld` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `categoryId`, `name`, `price`, `priceOld`, `image`, `status`, `description`, `createdAt`, `updatedAt`) VALUES
(19, 1, 'SAN PHAM 1 sua v', 100000, 200000, 'https://prices.vn/storage/photo/product/giay-the-thao-thoang-khi-cao-cap-sieu-dep-cho-nam-gioi-mh84.png', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '2023-12-18 09:02:26'),
(20, 2, 'SAN PHAM 2', 100000, 200000, 'https://salt.tikicdn.com/cache/400x400/ts/product/8c/10/22/18c48095b52470d4f1b39017437f41a2.jpg', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 1, 'Telescopes 101 sua', 100000, 200000, 'https://product.hstatic.net/1000162490/product/2_195f3bf6081e4c4ab6cdb3eb282bcdf9_master.png', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '2023-02-28 11:01:07'),
(23, 3, 'SAN PHAM 5', 100000, 200000, 'https://vcdn-giadinh.vnecdn.net/2021/08/04/60c1cc07d8f3a-a9a2fc19dad22dd7-4545-2467-1628055575.jpg', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 1, 'SAN PHAM 6', 100000, 200000, 'https://www.chapi.vn/img/product/2022/11/4/giay-vai-mui-tron-nam-mature-9-500x500.jpg', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 2, 'SAN PHAM 7', 100000, 200000, 'https://img.dilyno.com/NyEHatQkjsuTkWxVx-2x_s4N07wMf60qhwGtOuaFaJI/rs:fill:500:500:1/g:ce/aHR0cHM6Ly9obmNncm91cC13ZWIuc2dwMS5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8yMDIxLzA2LzQxMThjOTdjM2I1NmFlYmQwNWIyYWJjMjQxYmUzMjU5LmpwZw.jpg', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 3, 'SAN PHAM 8', 100000, 200000, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSw62fLBPHtVzTvQkgrlef2HMGBRO_uJTIRVf0Bqfpn-101zwA4jF60azX6bW8fHjxV9i8UuNkc7JJWHPSU6_wTBcXo8YHOmEK1Wdy7wMQ&usqp=CAE', 'Còn hàng', 'Dep', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 3, 'fgfg', 656, 678, 'https://bizweb.dktcdn.net/100/445/527/products/giay-the-thao-kaleea-15.jpg?v=1697714404477', 'gfg', NULL, '2023-02-28 11:52:09', '2023-02-28 12:24:15'),
(34, 1, 'them sp', 5656, 56567, 'https://salt.tikicdn.com/cache/w1200/ts/product/26/38/d4/8f3d3a4a949cae620ad03e99641fad44.jpg', 'fggf', NULL, '2023-03-02 10:18:10', '2023-03-02 10:18:10'),
(35, 1, 'Sản phẩm Puma', 235555, 500000, 'https://ananas.vn/wp-content/uploads/pro_A6T010_1.jpg', 'Còn hàng', 'Sản phẩm đẹp', '2023-03-19 11:39:51', '2023-03-19 11:39:51'),
(36, 1, 'Sản Phẩm Nike', 943456, 656546, 'https://sksport.vn/wp-content/uploads/2021/06/giay-adidas-nam-de-mau-den.jpg', 'Còn hàng', 'Sản phẩm đẹp', '2023-03-19 11:39:51', '2023-03-19 11:39:51'),
(37, 2, 'Sản phẩm adidas', 343456, 234565, 'https://sksport.vn/wp-content/uploads/2021/06/giay-adidas-nam-de-mau-xam-nhat.jpg', 'Còn hàng', 'sản phẩm đẹp', '2023-03-19 11:42:21', '2023-03-19 11:42:21'),
(39, 2, '3041', 35345, 56456, 'https://vietthethao.com/public/uploads/images/1716/giay-tennis-nike-zoom-nxt-hc-4-423x311c.png', 'c', NULL, '2024-04-30 03:36:58', '2024-04-30 03:36:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230126095015-create-category.js'),
('20230126095257-create-blog.js'),
('20230126095354-create-article.js'),
('20230126100034-create-order.js'),
('20230126100600-create-order-detail.js'),
('migration-create-cart-detail.js'),
('migration-create-cart.js'),
('migration-create-product.js'),
('migration-create-user.js'),
('migration-payment.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shipping`
--

CREATE TABLE `shipping` (
  `id` int(11) NOT NULL,
  `method` varchar(255) DEFAULT NULL,
  `value` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `shipping`
--

INSERT INTO `shipping` (`id`, `method`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'flash', 15, '2023-03-19 04:27:08', '2023-03-19 04:27:08'),
(2, 'economical', 10, '2023-03-19 04:27:08', '2023-03-19 04:27:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `cartId`, `username`, `email`, `password`, `phone`, `createdAt`, `updatedAt`) VALUES
(9, NULL, 'dat', 'dat@gmail.com', '$2a$10$UrqGUXGQJLftrwcp/MPCveH1BNF/wmE0QBsabOxJ5zozKDWFi08Ia', '1234', '2023-02-08 02:53:59', '2023-02-08 02:53:59'),
(21, NULL, 'dat', 'dattrong@gmail.com', '$2a$10$oz89hKKSJdWpPaDpAne/HOL1YYFG1ihn9gpv4MP12.ps5TsqV2rTi', '0987654321', '2023-12-13 14:03:05', '2023-12-13 14:03:05'),
(22, NULL, 'test', 'test@gmail.com', '$2a$10$w6DNe/5WOZjWTDQ10Cd/4O8Lx1LUzrIimzsgZ85X5UnGnbM/G.8CW', '12345', '2024-02-24 09:18:53', '2024-02-24 09:18:53');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `ShippingId` (`ShippingId`),
  ADD KEY `paymentId` (`paymentId`),
  ADD KEY `paymentId_2` (`paymentId`);

--
-- Chỉ mục cho bảng `cart_detail`
--
ALTER TABLE `cart_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CartId` (`CartId`),
  ADD KEY `ProductId` (`ProductId`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_fk` (`cartId`);

--
-- Chỉ mục cho bảng `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartId` (`cartId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `cart_detail`
--
ALTER TABLE `cart_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `shipping`
--
ALTER TABLE `shipping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`ShippingId`) REFERENCES `shipping` (`id`);

--
-- Các ràng buộc cho bảng `cart_detail`
--
ALTER TABLE `cart_detail`
  ADD CONSTRAINT `cart_detail_ibfk_1` FOREIGN KEY (`CartId`) REFERENCES `cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `cart_detail_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_fk` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `cart_detail` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
