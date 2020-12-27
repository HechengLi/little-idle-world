CREATE DATABASE IF NOT EXISTS little_idle_world;
USE little_idle_world;
CREATE TABLE IF NOT EXISTS tb_user (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL UNIQUE,
    nickname varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS tb_stat (
	id int NOT NULL AUTO_INCREMENT,
    user_id int,
    hp int,
    mp int,
    attack int,
    defence int,
    speed int,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES tb_user(id)
)