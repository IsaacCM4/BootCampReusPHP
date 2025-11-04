<?php 
 declare(strict_types=1);

 function restarNumeros(int $num1, int $num2){

    $resultado = $num1 - $num2;
    return "El resultado es: $resultado";
 }

 echo restarNumeros(10, 5);

?>

<!-- **👉🏻🧠 Ejer1 -  Función con modo estricto y tipos de datos**

Crea una función en PHP que cumpla con los siguientes requisitos:

1. Activa el **modo estricto** al comienzo del archivo para forzar el uso de tipos de datos estrictos.
2. La función debe llamarse `restarNumeros` y debe recibir exactamente **dos parámetros** de tipo `int`.
3. La función debe realizar la resta de los dos números recibidos como parámetros.
4. El resultado debe devolverse como un `string`, siguiendo el formato:`"El resultado es: X"`, donde `X` es el resultado de la resta.
5. Finalmente, llama a la función con dos números enteros y muestra el resultado en pantalla.
6. ¿Qué tipo de error se generaría si los parámetros introducidos no son los definidos en la función?
 ---------------------------------------------------------------------------------------------------------------------------------------------
///NOS DARIA EL SIGUIENTE ERROR: PHP Fatal error:  Uncaught TypeError: restarNumeros(): Argument #1 ($num1) must be of type int, string given
 ES DECIR INCOPTAIBILIDAD DE TIPOS 
-->