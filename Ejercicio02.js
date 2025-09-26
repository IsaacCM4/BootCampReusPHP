//Funcion arrow:
const nombreApellido = () =>{
    nombre = "Isaac";
    apellido = "Cabré Muñoz"
    return {nombre, apellido};

}

console.log(nombreApellido());

//Funcion con nombre
function verdad(){
    console.log(boolean);
}
var boolean = true
verdad(boolean);

//Parametros infinitoss
function infinitos(...numeros){
    numeros.forEach(element => {
        console.log(element)
    });
}

infinitos(1, 2, 3, 4, 5);
