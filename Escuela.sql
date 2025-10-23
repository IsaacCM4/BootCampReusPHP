-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS EscuelaDB;
USE EscuelaDB;

-- Tabla Profesores
CREATE TABLE Profesores (
    profesor_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
);

-- Tabla Estudiantes
CREATE TABLE Estudiantes (
    estudiante_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
);

-- Tabla Cursos
CREATE TABLE Cursos (
    curso_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    profesor_id INT NOT NULL,
    FOREIGN KEY (profesor_id) REFERENCES Profesores(profesor_id)
);

-- Tabla Notas
CREATE TABLE Notas (
    nota_id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT NOT NULL,
    curso_id INT NOT NULL,
    nota DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(estudiante_id),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

INSERT INTO Profesores (nombre, apellido) VALUES
('Juan', 'Pérez'),
('Ana', 'Gómez'),
('Luis', 'Martínez'),
('María', 'López'),
('Carlos', 'Sánchez');


INSERT INTO Estudiantes (nombre, apellido) VALUES
('Pedro', 'García'),
('Laura', 'Fernández'),
('Jorge', 'Díaz'),
('Sofía', 'Rodríguez'),
('Elena', 'Moreno');


INSERT INTO Cursos (nombre, profesor_id) VALUES
('Matemáticas', 1),
('Historia', 2),
('Ciencias', 3),
('Literatura', 4),
('Arte', 5),
('Física', 1),
('Química', 3);


INSERT INTO Notas (estudiante_id, curso_id, nota) VALUES
(1, 1, 8.5),
(1, 2, 7.0),
(2, 1, 9.0),
(2, 3, 8.0),
(3, 4, 7.5),
(3, 5, 9.5),
(4, 1, 6.5),
(4, 6, 8.0),
(5, 7, 7.0),
(5, 2, 8.5),
(1, 3, 9.0),
(2, 4, 8.5),
(3, 6, 7.0),
(4, 7, 9.5),
(5, 5, 8.0);


-- SELECT SQL
-- Mostrar los Alumnos a los que un Profesor les Da Clase
SELECT e.nombre, e.apellido, p.nombre AS profesor_nombre, p.apellido AS profesor_apellido FROM Estudiantes e
JOIN Notas n ON e.estudiante_id = n.estudiante_id
JOIN Cursos c ON n.curso_id = c.curso_id
JOIN Profesores p ON c.profesor_id = p.profesor_id
WHERE p.profesor_id = 1; 

-- Mostrar el Total de Cursos que Imparte el Profesor
SELECT p.nombre, p.apellido, COUNT(c.curso_id) AS total_cursos FROM Profesores p
JOIN Cursos c ON p.profesor_id = c.profesor_id
GROUP BY p.profesor_id;


-- Mostrar el Total de Cursos que Ha Realizado el Alumno
SELECT e.nombre, e.apellido, COUNT(n.nota_id) AS total_cursos FROM Estudiantes e
JOIN Notas n ON e.estudiante_id = n.estudiante_id
GROUP BY e.estudiante_id;
