<!-- 1. Incluye un archivo externo `headache_advice.php` con recomendaciones dependiendo de si tienes dolor de cabeza o no.
    - Si te duele la cabeza deberás de imprimir: “Te duele la cabeza, te recomendamos que tomes un ibuprofeno para aliviar el dolor.”
    - Si no te duele: “No te duele la cabeza. ¡Todo está bien!”
2. Tienes un archivo principal `index.php` que decidirá qué mensaje mostrar.
    - Define una variable booleana `$headache`
    - Asocia el fichero `headache_advice.php`
3. Prueba si cambiando el valor de la variable `$headache` ( `true` o `false` para probar ambas situaciones).
4. Argumenta cual de las funciones (`include`, `require`, `include_once` y `require_once`) has utilizado y el porque. -->



<?php 
 $headache = false;
if ($headache == false){
    echo "No te duele la cabeza. ¡Todo está bien!";
}else {
    echo "Te duele la cabeza, te recomendamos que tomes un ibuprofeno para aliviar el dolor.";
}
?>

<!-- Elegi require ya que solo la pagina utiliza esta funcion, entonces  para saber si lo esta cogiendo bien, haremos que pete directamente-->
 