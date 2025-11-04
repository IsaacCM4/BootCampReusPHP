<!--**👉🏻🧠 Ejer3 -  Explorando las variables estáticas**

Escribe una función llamada `contadorEstatico` que use una variable `static` para 
contar el número de veces que se ha llamado a la función. Cada vez que se ejecute, la función debe imprimir el número actual de llamadas.-->

<?php 
    function contadorEstatico(){
        static $num;
        $num++;
        echo $num . "\n";
    }

  contadorEstatico();
   contadorEstatico();
    contadorEstatico();
     contadorEstatico();


?>