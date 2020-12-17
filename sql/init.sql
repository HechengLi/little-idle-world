CREATE DATABASE IF NOT EXISTS little_idle_world;
USE little_idle_world;
CREATE TABLE IF NOT EXISTS tb_user (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;