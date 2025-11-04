<!--**👉🏻🧠 Ejer1 -  Uso de** `(int)` **para hacer casting**

Escribe un script que convierta las siguientes variables a enteros usando el operador `(int)` y muestre el resultado:-->

<?php
$values = ["123abc", "42.99", true, false, null, "abc123", [1, 2, 3]];

foreach ($values as $value) {
    if (is_array($value)) {
        echo "No se puede convertir en int \n";
    } else {
        echo "(int) '$value': " . (int) $value . "\n";
    }
}
?>