<!--**👉🏻🧠 Ejer2 -  Identificando valores escalares:**
Define un array con los siguientes valores:
$valores = [42, "PHP", 3.14, true, null, [1, 2, 3]];
Escribe un script que recorra el array con un forEach e indique para cada elemento si es un tipo escalar (`int`, `float`, `bool` o `string`). Usa la función `is_scalar()`.-->

<?php
$valores = [42, "PHP", 3.14, true, null, [1, 2, 3]];

foreach ($valores as $valor) {
    if (is_scalar($valor)) {
        echo $valor . " → Es un valor escalar (" . gettype($valor) . ")\n";
    } else {
        echo json_encode($valor) . " → NO es un valor escalar (" . gettype($valor) . ")\n";
    }
}
?>

