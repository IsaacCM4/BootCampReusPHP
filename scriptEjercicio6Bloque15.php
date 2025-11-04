<!--**👉🏻🧠 Ejer6 -  Mezclando scopes**

1. Define una variable global llamada `$factor` con valor 10.
2. Crea una función llamada `calcularProducto` que:
    - Reciba un número.
    - Declare una variable local llamada `$producto` y la inicialice multiplicando el número recibido por `$factor`.
    - Usa `global` o `$GLOBALS` para acceder a `$factor` y realizar la multiplicación correctamente.
    - Devuelve el resultado.
3. Llama a la función con diferentes números y observa los resultados.-->


<?php 
    $factor = 10;
    function calcularProducto ($num){
        global $factor;
        $producto = $num *  $factor;
        return $producto;
    }

    echo calcularProducto(10) . "\n";
     echo calcularProducto(20)  . "\n";
      echo calcularProducto(30)  . "\n";
       echo calcularProducto(40)  . "\n";
?>