<!--**👉🏻🧠 Ejer3 -  Identificando valores escalares:**
Crea una función `calculadora($num1, $num2, $operacion)` que reciba dos números y una operación como parámetros. La función deberá realizar la operación indicada sobre los dos números y devolver el resultado. Las operaciones disponibles son:

- "suma"
- "resta"
- "multiplicacion"
- "division"

La función debe validar que ambos parámetros numéricos sean escalares (es decir, enteros o flotantes). Si los parámetros no son válidos, deberá devolver un mensaje de error.

**Requisitos:**

1. Usa **callables** (funciones anónimas) para definir las operaciones.
2. Verifica que los números sean escalares antes de realizar la operación.
3. La operación de **division** debe verificar si el segundo número es cero, en cuyo caso debe devolver un mensaje de error indicando que no se puede dividir entre cero.
-->

<?php


function calculadora($num1, $num2, $operacion)
{

    if (!is_scalar($num1) || !is_scalar($num2)) {
        return "Los parámetros deben ser valores escalares";
    }

    $operaciones = [
        "suma" => function ($a, $b) {
            return $a + $b;
        },
        "resta" => function ($a, $b) {
            return $a - $b;
        },
        "multiplicacion" => function ($a, $b) {
            return $a * $b;
        },
        "division" => function ($a, $b) {
            if ($b == 0) {
                return "No se puede dividir entre 0";
            }
            return $a / $b;
        }
    ];

    $resultado = $operaciones[$operacion]($num1, $num2);

    return $resultado . "\n";

}

echo calculadora(10, 5, "suma") ;
echo calculadora(10, 5, "resta") ;
echo calculadora(10, 5, "multiplicacion") ;
echo calculadora(10, 5, "division") ;

?>