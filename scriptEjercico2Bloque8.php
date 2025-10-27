<?php
if (php_sapi_name() == "cli") {
    // Si es CLI (terminal), usa "\n"
    echo "Hola, Mundo!\n";
    echo "Este mensaje se adapta al entorno de ejecución.";
} else {
    // Si es navegador, usa "<br>"
    echo "Hola, Mundo!<br>";
    echo "Este mensaje se adapta al entorno de ejecución.";
}
?>
