<!--$_COOKIE## Ejercicios del bloque

**👉🏻🧠 Ejer1 -  Explorando el alcance global**

Crea una variable global llamada `$nombre` y asígnale tu nombre. Luego, define una función llamada `saludarGlobal` que intente imprimir la variable global `$nombre`.

- **Primero**, hazlo sin usar la palabra clave `global`. ¿Qué pasa cuando la llamas? ¿Porque? 

///ME DA warning QUE LA VARIABLE NOMBRE ESTA UNDEFINED

- **Después**, corrige el código para que acceda correctamente a la variable global usando `global`.-->



<?php 
     $nombre = "Isaac";
    function saludarGlobal(){
        global $nombre;
        echo $nombre;
    }

    saludarGlobal();
?>