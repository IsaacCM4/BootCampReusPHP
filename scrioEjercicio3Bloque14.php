<!--**👉🏻🧠 Ejer3 -  Uso de** `intValue()` **en una clase**

Crea una clase `MyNumber` que contenga una propiedad privada `value`. Añade un método llamado `intValue()` que devuelva el valor entero de la propiedad `value`.

**Requisitos**:

1. Inicializa la propiedad `value` con un valor decimal (por ejemplo, `42.75`).
2. Usa el método `intValue()` para obtener la parte entera del número.
-->
<?php 
class Number{
    private $value;

    public function __construct($value){
    $this->value = $value;
}
    public function intValue(){
        return $this->value;
    }
}

$valor = new Number(42.75);

echo "El valor es: " . $valor->intValue();



?>
