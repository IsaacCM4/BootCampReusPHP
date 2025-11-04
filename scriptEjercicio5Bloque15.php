<!--**👉🏻🧠 Ejer5 -  Usando** `GLOBALS`

Crea una variable global llamada `$saludo` con el valor `"¡Hola, mundo!"`. Define una función llamada `mostrarSaludoGlobal` que acceda a la variable global usando la superglobal `$GLOBALS` y la imprima-->

<?php 
    $saludo = "¡Hola, mundo!";

    function mostrarSaludoGlobal(){
        global $saludo;
        echo $saludo;
    }

    mostrarSaludoGlobal();
?>