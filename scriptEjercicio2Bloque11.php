<!--En este ejercicio, trabajarás con una variable en PHP a la que irás añadiendo diferentes tecnologías de desarrollo web de forma secuencial. El objetivo es que, a medida que avances en el ejercicio, vayas acumulando las tecnologías en una sola variable y la imprimas después de cada paso para mostrar cómo cambia su valor.

1. Declara una variable llamada `$tecnologias` y asígnale el valor "HTML".
2. Imprime el valor de `$tecnologias`.
3. Añade " CSS" a la variable `$tecnologias`.
4. Imprime el nuevo valor de `$tecnologias`.
5. Añade " JavaScript" a la variable `$tecnologias`.
6. Imprime el nuevo valor de `$tecnologias`.
7. Añade " TypeScript" a la variable `$tecnologias`.
8. Imprime el nuevo valor de `$tecnologias`.
9. Añade " PHP" a la variable `$tecnologias`.
10. Imprime el valor final de `$tecnologias`.-->

<?php 
$tecnologias = "HTML\n";
echo $tecnologias;
$tecnologias = "HTML CSS \n";
echo $tecnologias;
$tecnologias = "HTML CSS JAVASCRIPT \n";
echo $tecnologias;
$tecnologias = "HTML CSS JAVASCRIP TypeScript \n";
echo $tecnologias;
$tecnologias = "HTML CSS JAVASCRIP TypeScript PHP \n";
echo $tecnologias;
?>