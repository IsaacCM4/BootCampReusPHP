<!--**👉🏻🧠 Ejer4 -  Array dinámico con variables variable**

Declara un array con 3 claves: `["nombre", "edad", "pais"]` y valores `["Ana", 25, "España"]`. Utilizando un bucle, crea variables dinámicas llamadas `$nombre`, `$edad`, y `$pais` 
asignándoles los valores correspondientes del array.

Imprime cada una de las variables creadas.-->

<?php 
    $array = ["nombre" => "Ana", "edad" => 25, "pais" => "España"];

    foreach($array as $key => $value){
        $$key = $value;
    }
    echo "Nombre: $nombre \n";
    echo "Edad: $edad \n";
    echo "Pais: $pais \n";
?>
