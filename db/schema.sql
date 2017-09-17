CREATE DATABASE fashion_db;

USE fashion_db;

CREATE TABLE users
(
  id int AUTO_INCREMENT NOT NULL,
  username VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE liked (
id INT AUTO_INCREMENT NOT NULL,
product_url varchar(255),
date datetime NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE TABLE disliked_products_db
(
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
