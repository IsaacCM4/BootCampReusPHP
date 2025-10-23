-- Agrupa los registros por país, y muestra cuántos hay en total por país, mostrando el total y el país.
SELECT country, COUNT(*) 
FROM myTable
GROUP BY country;
