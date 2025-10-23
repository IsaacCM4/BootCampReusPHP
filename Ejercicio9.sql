-- Elimina todos los registros que sean de Singapur.
SET SQL_SAFE_UPDATES = 0;
DELETE FROM myTable WHERE country = 'Singapore';