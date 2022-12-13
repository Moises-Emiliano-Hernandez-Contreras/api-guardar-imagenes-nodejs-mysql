create database imagenes;

use imagenes;

create table image(
id int not null primary key auto_increment,
tipo varchar(50) not null,
nombre varchar(200) not null);