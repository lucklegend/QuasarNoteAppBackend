DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;
USE test;

CREATE TABLE IF NOT EXISTS users (
    user_id VARCHAR(37) PRIMARY KEY,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_updated DATETIME DEFAULT NULL
) ENGINE=InnoDB;


DROP TABLE notes;
CREATE TABLE IF NOT EXISTS notes (
    note_id int(11) unsigned NOT NULL AUTO_INCREMENT,
	title VARCHAR(100) DEFAULT NULL,
    description TEXT DEFAULT NULL,
    content TEXT DEFAULT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_updated DATETIME DEFAULT NULL,
    PRIMARY KEY (`note_id`)
) ENGINE=InnoDB;

