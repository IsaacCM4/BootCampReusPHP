"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Define una función que no retorne nada (void).
function saludar() {
    console.log("Hola");
}
saludar();
// Otra función que retorne un string
function cadenaTexto(texto) {
    console.log(texto);
    return texto;
}
var texto = "Hola a todos, esto ess TypeScript";
cadenaTexto(texto);
// Define otra función que pueda retornar tanto un valor boolean como un string.
function devolverBoleanString(nombre, encendido) {
    console.log("Mi nombre es ", nombre, "Y tengo la bombilla enciendida?", encendido);
    return nombre;
}
var nombre = "Isaac";
var encendido = true;
devolverBoleanString(nombre, encendido);
// Transforma las 3 funciones anteriores a arrow function.
var saludar1 = function () {
    console.log("Hola estoy void");
};
saludar1();
var saludar2 = function (texto) {
    if (texto === void 0) { texto = "Hola a todos, esto ess TypeScript"; }
    console.log(texto);
    return texto;
};
saludar2();
var devolverBoleanString2 = function (nombre2, encendido2) {
    if (nombre2 === void 0) { nombre2 = "Isaac"; }
    if (encendido2 === void 0) { encendido2 = true; }
    console.log("Mi nombre es ", nombre, "Y tengo la bombilla enciendida?", encendido);
    return nombre;
};
devolverBoleanString2();

let tupla1: [boolean, Number, String] = [true, 1, "3"];
//# sourceMappingURL=ejercicioMetodos.js.map