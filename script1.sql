-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS MusicDB;
USE MusicDB;

CREATE TABLE Artist (
    idArtist INT AUTO_INCREMENT PRIMARY KEY,
    artistName VARCHAR(255) NOT NULL
);

CREATE TABLE Genres (
    idGenre INT AUTO_INCREMENT PRIMARY KEY,
    Genre VARCHAR(255) NOT NULL
);

CREATE TABLE Album (
    idAlbum INT AUTO_INCREMENT PRIMARY KEY,
    albumName VARCHAR(255),
    dateReleased DATETIME,
    idArtist INT,
    idGenre INT
);
