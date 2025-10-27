<!--- Declara un **array asociativo** llamado `$frameworksPHP`, donde cada clave es el nombre de un framework de PHP (por ejemplo, "Laravel", "Symfony", "CodeIgniter") y el valor es la versión actual de ese framework (por ejemplo, "9.x", "6.x", "4.x").
- Usa **interpolación con `{}`** para imprimir un mensaje que diga:
    - `"El framework Laravel tiene la versión 9.x."`
- Accede a los valores de otros frameworks dentro del array utilizando **interpolación con `{}`** y muestra su nombre y versión en un formato similar al anterior.
- Modifica el array para añadir un nuevo framework (por ejemplo, "Zend Framework") y muestra su nombre y versión en la salida.
- Utiliza **interpolación con `{}`** para mostrar el nombre del último framework del array.-->

<?php 
 $frameworks = ['PHP' => 'Larabel', 'Java' => 'Springboot', 'JavaScript' => 'React'];    
echo "El framework de  PHP es {$frameworks['PHP']}\n";
echo "El framework de Java es {$frameworks['Java']}\n";
echo "El framework de JavaScript es {$frameworks['JavaScript']}\n";

?>