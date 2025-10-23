CREATE DATABASE IF NOT EXISTS EjercicioVentas;
USE EjercicioVentas;

CREATE TABLE salesman (
    SALESMAN_ID INT PRIMARY KEY,
    NAME VARCHAR(30),
    CITY VARCHAR(15),
    COMMISSION DECIMAL(8,2)
);

CREATE TABLE customer (
    CUSTOMER_ID INT PRIMARY KEY,
    CUST_NAME VARCHAR(30),
    CITY VARCHAR(15),
    GRADE NUMERIC(3)
);

CREATE TABLE orders (
    ORD_NO INT PRIMARY KEY,
    PURCH_AMT DECIMAL(8,2),
    ORD_DATE DATE,
    CUSTOMER_ID INT,
    SALESMAN_ID INT,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES customer(CUSTOMER_ID),
    FOREIGN KEY (SALESMAN_ID) REFERENCES salesman(SALESMAN_ID)
);

INSERT INTO salesman (SALESMAN_ID, NAME, CITY, COMMISSION) VALUES
(101, 'James Hoog', 'New York', 0.15),
(102, 'Nail Knite', 'Paris', 0.25),
(103, 'Pit Alex', 'London', 0.10),
(104, 'Mc Lyon', 'Paris', 0.30),
(105, 'Paul Adam', 'Rome', 0.25),
(106, 'Lauson Hen', 'San Jose', 0.12),
(107, 'Lily Bush', 'Los Angeles', 0.18),
(108, 'Taylor Swift', 'New York', 0.20),
(109, 'Katy Perry', 'San Francisco', 0.15),
(110, 'John Smith', 'Chicago', 0.22);


INSERT INTO customer (CUSTOMER_ID, CUST_NAME, CITY, GRADE) VALUES
(1, 'Alpha Co.', 'New York', 100),
(2, 'Beta Corp.', 'Paris', 200),
(3, 'Gamma Ltd.', 'London', 150),
(4, 'Delta Inc.', 'Paris', 200),
(5, 'Epsilon SA', 'Rome', 100),
(6, 'Zeta LLC', 'San Jose', 300),
(7, 'Eta Assoc.', 'Los Angeles', 250),
(8, 'Theta Co.', 'New York', 100),
(9, 'Iota Corp.', 'San Francisco', 200),
(10, 'Kappa Ltd.', 'Chicago', 150);


INSERT INTO orders (ORD_NO, PURCH_AMT, ORD_DATE, CUSTOMER_ID, SALESMAN_ID) VALUES
(1001, 5000.00, '2023-10-01', 1, 101),
(1002, 3000.00, '2023-10-02', 2, 102),
(1003, 4000.00, '2023-10-03', 3, 103),
(1004, 2000.00, '2023-10-04', 4, 104),
(1005, 6000.00, '2023-10-05', 5, 105),
(1006, 7000.00, '2023-10-06', 6, 106),
(1007, 8000.00, '2023-10-07', 7, 107),
(1008, 9000.00, '2023-10-08', 8, 108),
(1009, 1000.00, '2023-10-09', 9, 109),
(1010, 1200.00, '2023-10-10', 10, 110);

-- SQL CONSULTAS
-- Contar los Elementos Totales en la Tabla orders
SELECT DISTINCT CUST_NAME
FROM customer;

-- Mostrar los Clientes con Nombres Distintos
SELECT DISTINCT CUST_NAME
FROM customer;

-- Ordenar los Vendedores por Ventas Realizadas
SELECT s.SALESMAN_ID, s.NAME, SUM(o.PURCH_AMT) AS total_ventas FROM salesman s
JOIN orders o ON s.SALESMAN_ID = o.SALESMAN_ID
GROUP BY s.SALESMAN_ID, s.NAME
ORDER BY total_ventas DESC;

-- Mostrar los 5 Primeros Clientes (Ordenados por ID)
SELECT *
FROM customer
ORDER BY CUSTOMER_ID ASC
LIMIT 5;

-- Sacar el Registro con un PURCH_AMT Menor

SELECT *
FROM orders
ORDER BY PURCH_AMT ASC
LIMIT 1;

--  Sacar el Registro con un PURCH_AMT Mayor
SELECT *
FROM orders
ORDER BY PURCH_AMT DESC
LIMIT 1;





