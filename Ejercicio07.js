//Parte 1

function transformacion(frase) {
    return frase.replace(/a/g, "o");
}

let frase = "Mi papa es el papa del papa de una papa que es papa";

console.log(transformacion(frase));

//Parte 2

function empiezaPor(palabra){

    if(palabra.startsWith("aca") == true){
        return "Esta palara empieza por aca";
    }else{
        return "Esta palabra no empieza por aca";
    }
}

var palabra = "academia";
console.log(empiezaPor(palabra));
var palabra = "escuela";
console.log(empiezaPor(palabra));

//Parte 3
console.log("Hola".repeat(3));
