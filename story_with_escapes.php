<?php
if (php_sapi_name() == "cli") {
    // Si es CLI (terminal), usa "\n"
    $newline = "\n";
} else {
    // Si es navegador, usa "<br>"
    $newline = "<br>";
}

echo "Historia con Secuencias de Escape" . $newline;
echo "Había una vez, en un pequeño pueblo, un joven llamado Juan. Cada día, él salía a explorar el bosque cercano. A menudo, encontraba cosas misteriosas y emocionantes." . $newline;
echo "Una de las aventuras más memorables fue cuando encontró: 1. Un mapa antiguo 2. Una llave dorada 3. Un cuaderno con secretos escondidos" . $newline;
echo "En su camino, Juan tuvo que seguir la ruta C:\Archivos\Aventuras\Mapa.txt." . $newline;
echo 'Juan pensó: "¡Este mapa podría ser la clave para descubrir el tesoro perdido!" Pero, su amigo Pedro le dijo: "No te emociones tanto, Juan. Puede ser una trampa."' . $newline;
echo "Y así, la aventura de Juan continuó con más misterios por resolver... " . $newline;
?>
