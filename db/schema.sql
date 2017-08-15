-- write SQL queries that: create the burger_db, use the burger_db
-- create a burgers table with an id field, burger_name, devoured, date: TIMESTAMP
CREATE DATABASE burgers_db

USE burgers_db;

CREATE table burgers (
	item_id int not null auto_increment,
    burger_name varchar(255) null,
    devoured boolean null,
    date_created timestamp
    primary key (item_id)
);