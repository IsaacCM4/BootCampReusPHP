<!--**👉🏻🧠 Ejer1 -  Interpolación y concatenación de variables con lenguajes de programación y sus creadores**

- Declara dos variables: una llamada `$creador` con el nombre de un creador de lenguaje de programación (por ejemplo, "Brendan Eich") y otra llamada `$lenguaje` con el nombre de un lenguaje de programación (por ejemplo, "JavaScript").
- Utiliza la **interpolación de variables** para imprimir un mensaje que diga:
    - "El creador de <lenguaje> es <creador>."
- Usa **concatenación de variables** para imprimir el mismo mensaje, pero utilizando el operador `.` para unir las cadenas.
- Modifica las variables `$creador` y `$lenguaje` con nuevos valores (por ejemplo, "Rasmus Lerdorf" y "PHP") y repite los pasos 2 y 3 con los nuevos valores.-->

<?php
$creador = "Brendan Eich";
$lenguaje = "JavaScript";

echo "El creador de {$lenguaje} es {$creador} (Interpolación)\n";
echo "El creador de" . $lenguaje . "es"  . $creador . "(Concatenación)\n";

$creador = "Rasmus Lerdof";
$lenguaje = "PHP";

echo "El creador de {$lenguaje} es {$creador} (Interpolación)\n";
echo "El creador de" . $lenguaje . "es"  . $creador . "(Concatenación)";
?>