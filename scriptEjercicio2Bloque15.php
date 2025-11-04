<!--**👉🏻🧠 Ejer2 -  Entendiendo el alcance local**

Define una función llamada `multiplicarPorDos` que reciba un número y declare una variable local llamada `$resultado` para almacenar el producto de ese número por 2. Haz que la función imprima `$resultado`.

Luego, intenta imprimir `$resultado` **fuera de la función** y observa lo que sucede.-->

<?php 
    $numero = 2;
    function multiplicarPorDos($numero){
        $resultado = $numero * 2;
        echo "Resultado dentro de la funcion: ".$resultado;
    }

    multiplicarPorDos($numero);

    echo $resultado; // NOS VA A DAR EL WARNING :D
?>

