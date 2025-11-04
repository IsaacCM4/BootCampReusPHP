<!--**👉🏻🧠 Ejer4 -  Comparación entre `static` y variables locales**

Define una función llamada `compararContadores` que haga lo siguiente:

1. Declare una variable local `$contadorLocal` inicializada en 0.
2. Declare una variable estática `$contadorEstatico` inicializada en 0.

En cada ejecución, ambas variables deben incrementarse y sus valores deben imprimirse. Llama a la función varias veces y observa cómo cambian los resultados.-->

<?php
    function compararContadores(){
        $contadorLocal = 0;
        static $contadorEstatico = 0;
        $contadorLocal++;
        $contadorEstatico++;
        echo $contadorLocal . "\n";
        echo $contadorEstatico . "\n";
    }

    compararContadores();
    compararContadores();
    compararContadores();
    compararContadores();
?>