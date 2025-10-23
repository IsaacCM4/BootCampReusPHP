CREATE DATABASE IF NOT EXISTS CiudadesDB;
USE CiudadesDB;

CREATE TABLE Country (
    country_id int PRIMARY KEY AUTO_INCREMENT,
    country VARCHAR(50),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE City (
    city_id INT PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(50),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES Country(country_id)
);

CREATE TABLE Address (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    address VARCHAR(50),
    address2 VARCHAR(50),
    district VARCHAR(20),
    postal_code VARCHAR(10),
    phone VARCHAR(20),
    location VARCHAR(20),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES City(city_id)
);

INSERT INTO Country (country) VALUES
('España'),
('Francia'),
('Italia'),
('Alemania'),
('Portugal'),
('Reino Unido'),
('Grecia'),
('Bélgica'),
('Países Bajos'),
('Suecia'),
('Noruega'),
('Dinamarca'),
('Finlandia'),
('Austria'),
('Suiza'),
('Irlanda'),
('Polonia'),
('Rumanía'),
('Hungría'),
('República Checa');

INSERT INTO City (city, country_id) VALUES
('Madrid', 1),
('Barcelona', 1),
('Sevilla', 1),
('Valencia', 1),
('Zaragoza', 1),
('Málaga', 1),
('Bilbao', 1),
('París', 2),
('Lyon', 2),
('Marsella', 2),
('Toulouse', 2),
('Niza', 2),
('Estrasburgo', 2),
('Roma', 3),
('Milán', 3),
('Nápoles', 3),
('Turín', 3),
('Berlín', 4),
('Múnich', 4),
('Hamburgo', 4);


INSERT INTO Address (address, district, postal_code, phone, location, city_id) VALUES
('Calle Mayor 1', 'Centro', '28013', '123456789', 'Madrid', 1),
('Avenida Diagonal 456', 'Eixample', '08013', '987654321', 'Barcelona', 2),
('Calle Sierpes 78', 'Casco Antiguo', '41004', '678901234', 'Sevilla', 3),
('Calle Colón 12', 'Ciutat Vella', '46004', '612345678', 'Valencia', 4),
('Calle Alfonso I 15', 'Centro', '50003', '876543210', 'Zaragoza', 5),
('Paseo Marítimo 3', 'Este', '29002', '654321987', 'Málaga', 6),
('Gran Vía 45', 'Centro', '48001', '665544332', 'Bilbao', 7),
('Rue de Rivoli 75', 'Centro', '75004', '192837465', 'París', 8),
('Avenue Jean Jaurès 10', '7ème', '69007', '476543210', 'Lyon', 9),
('Boulevard de la Blancarde 23', '4ème', '13004', '491283746', 'Marsella', 10),
('Place du Capitole 5', 'Centro', '31000', '567890123', 'Toulouse', 11),
('Promenade des Anglais 100', 'Centro', '06000', '493210456', 'Niza', 12),
('Rue des Hallebardes 15', 'Centro', '67000', '388765432', 'Estrasburgo', 13),
('Via del Corso 123', 'Centro Histórico', '00186', '063456789', 'Roma', 14),
('Via Dante 25', 'Centro', '20121', '024567890', 'Milán', 15),
('Via Toledo 30', 'Centro', '80134', '081234567', 'Nápoles', 16),
('Corso Regina Margherita 45', 'Centro', '10153', '011234567', 'Turín', 17),
('Unter den Linden 10', 'Mitte', '10117', '301234567', 'Berlín', 18),
('Marienplatz 8', 'Altstadt', '80331', '892345678', 'Múnich', 19),
('Jungfernstieg 15', 'Neustadt', '20354', '403456789', 'Hamburgo', 20);


