<!--**👉🏻🧠 Ejer 5 - Lectura de un fichero** `.txt`

1. Crea un archivo de texto llamado `file.txt` en el mismo directorio donde se encuentra el script PHP. Escribe algunas líneas de texto dentro de este archivo.
2. Escribe un script PHP que:
    - Abra el archivo `file.txt` en modo lectura utilizando `fopen()`.
    - Muestra el recurso devuelto por `fopen()` usando `var_dump()`.
    - Si el archivo se abre correctamente, lea todo su contenido con `fread()` y muéstralo en pantalla.
    - Finalmente, cierre el archivo usando `fclose()`.
3. Si no se puede abrir el archivo, muestra un mensaje de error indicando que no se pudo abrir el archivo.-->

<?php
   $file = fopen("file.txt", "r");
   var_dump($file);
   if($file){
 $contenido = fread($file, filesize("file.txt"));
   echo $contenido;
   } else{
    echo "No se pudo abrir el archivo ";
   }
  
?>