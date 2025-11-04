<!--**👉🏻🧠 Ejer1 -  Explorando el alcance global**

Declara una variable llamada `$base` con el valor `"dinamica"`. Utiliza este valor para crear una variable dinámica llamada `$dinamica` y asígnale el valor `"Este es un valor dinámico"`.

Finalmente, imprime el contenido de `$dinamica`.-->

<?php
$base = "dinamica";  
$$base = "Este es un valor dinámico";  
echo $dinamica; 
?>