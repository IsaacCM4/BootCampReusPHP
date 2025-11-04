<!--## Ejercicios del bloque

**👉🏻🧠 Ejer1 -  Determinación de Tipos de Datos y Visualización en PHP**

Escribe un script en PHP que realice las siguientes acciones:

1. Defina un conjunto de variables con diferentes tipos de datos. Estas variables deben incluir al menos un número entero, un número decimal, un valor booleano, una cadena de texto, un array y un valor nulo.
2. Recorra cada una de las variables utilizando un bucle.
3. Para cada variable, imprima en pantalla:
    - Su valor.
    - Su tipo de dato utilizando la función `gettype()`.

El resultado debe mostrarse en un formato legible y organizado.-->
<?php 

$arrayVariables = [
		"nombre" => "Isaac",
		"salario" => 18000,
		"Dinero en cuenta" => 19000.30,
		"trabajando" => true,
		"pasatiempos" => ["programacion", "videojuegos", "gym"]
		];

   foreach ($arrayVariables as $llave => $valor) {
    echo $valor . " | Su tipo es: " . gettype($valor) . "\n";
}



?>

