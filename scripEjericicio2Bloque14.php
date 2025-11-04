<!--**👉🏻🧠 Ejer2 -  Uso de** `settype()` **para cambiar tipos dinámicamente**

Crea un script que tome una variable inicial `$var = "56.78"` y la convierta a diferentes tipos usando `settype()`. Cambia el tipo de la variable a:

1. Entero (`integer`)
2. Flotante (`float`)
3. Cadena (`string`)
4. Booleano (`boolean`)

**Salida esperada**:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/301c8a71-0be9-4d7e-a05c-47913ebe3101/8a616725-48f1-484f-92aa-8b7a6b8ce283/image.png)-->

<?php 
$var = "56.78";
		
		settype($var, "integer");
		echo "Valor en integer: $var <br>";
        settype($var, "float");
        echo "Valor en float: $var /n";
        settype($var, "string");
        echo "Valor en string: $var /n"
?>