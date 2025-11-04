<!--**👉🏻🧠 Ejer3 -  Variables dinámicas con claves dinámicas**

Crea una variable llamada `$clave` que almacene el valor `"usuario"`. Usa este valor para crear dinámicamente una variable `$usuario` con el contenido `"Juan Pérez"`.

Imprime el valor de `$usuario`.-->

<?php 
    $clave = "usuario";
    $$clave = "Juan Pérez";

    echo $usuario;
?>