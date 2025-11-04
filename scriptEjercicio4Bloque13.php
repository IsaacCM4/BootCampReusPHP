<!--**👉🏻🧠 Ejer4 -**  Creación y Manipulación de Arrays Asociativos en PHP**:**
1. Define un array asociativo que almacene la siguiente información sobre una persona:

- **Nombre** (como una cadena de texto)
- **Edad** (como un número entero)
- **Ubicación** (como una cadena de texto)
- **Profesión** (como una cadena de texto)
- **Intereses** (como un array de cadenas de texto, por ejemplo: "tecnología", "programación", "ciencia")
1. Después de definir el array, realiza lo siguiente:
    - Muestra el contenido completo del array utilizando `print_r()`.
    - Accede y muestra solo el nombre y la edad de la persona.
    - Cambia la ubicación de la persona por otra ciudad de tu elección y muestra el array actualizado.
    - Agrega un nuevo interés al array de intereses y muestra la lista de intereses.
2. Finalmente, verifica si la clave "edad" existe en el array y muestra un mensaje indicando si la clave está presente o no.-->
<?php
$intereses = ["programación"];
$arrayPersona = ["nombre" => "Isaac", "edad" => 20, "ubi" => "Valls", "profesión" => "programador", "interes" => $intereses];
print_r($arrayPersona);
echo $arrayPersona["nombre"];
$arrayPersona["ubi"] = "Reus";
print_r($arrayPersona);
$arrayPersona["interes"][1] = "Inteligencia artificial";
print_r($arrayPersona);
?>
