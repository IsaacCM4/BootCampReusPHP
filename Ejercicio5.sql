-- Haz una subquery que saque los IDs de los registros que sean de Alemania y Turquía y posteriormente utilízala dentro de la query principal para mostrar ciudad, país y código postal.
SELECT region AS ciudad, country AS pais, postalZip AS codigo_postal FROM myTable WHERE id IN (
    SELECT id
    FROM myTable
    WHERE country IN ('Germany', 'Turkey')
);

