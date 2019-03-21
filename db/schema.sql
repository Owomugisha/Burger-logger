drop database burger_db;
create database burger_db;
use burger_db;
create table burgers(
    id int not null auto_increment,
    burger_name varchar(255) not null,
    devoured boolean not null,
    date timestamp not null default current_timestamp,
    primary key(id)
);