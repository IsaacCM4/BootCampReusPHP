<!--**👉🏻🧠 Ejer2 -  Generando múltiples variables dinámicamente**

Escribe un programa que genere 5 variables dinámicas con nombres `var1`, `var2`, ..., `var5` dentro de un bucle `for`. Cada variable debe contener el mensaje 
`"Variable dinámica número X"`, donde `X` es el número de la variable.

Después, imprime el contenido de todas las variables creadas.-->
<?php
for ($i = 1; $i <= 5; $i++) {
    $nombre = "var" . $i;
    $$nombre = "Variable dinámica número $i";
}

for ($i = 1; $i <= 5; $i++) {
    $nombre = "var" . $i; 
    echo $$nombre . "<br>";
}
?>
