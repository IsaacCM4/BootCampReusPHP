//Punto 1
function suma(num1, num2, num3){
    num = num1 + num2 + num3;
    return num;
}

console.log(suma(5, 4, 1));

//Punto 2

function nombre(nombre, apellido1, apellido2){
    nombreCompleto = nombre + apellido1 + apellido2;
    return nombreCompleto;
}

console.log(nombre("Isaac", " Cabré ", "Muñoz"));

//Punto 3
function comparacion(num1, num2){
    if(num1 > num2){
        return "El mayor es el " + num1;
    }else if(num1 < num2){
        return "El mayor es el " + num2;
    }
}

console.log(comparacion(9, 10));