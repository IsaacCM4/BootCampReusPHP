//Define una función que no retorne nada (void).
function saludar(): void{
    console.log("Hola");
}

saludar();
// Otra función que retorne un string
function cadenaTexto(texto: string): string{
    console.log(texto);
    return texto;
}

let texto: string = "Hola a todos, esto ess TypeScript";
cadenaTexto(texto);
// Define otra función que pueda retornar tanto un valor boolean como un string.

function devolverBoleanString(nombre:string, encendido: boolean): Boolean|String {
     console.log("Mi nombre es ", nombre, "Y tengo la bombilla enciendida?", encendido);
    return nombre;
}

let nombre: string = "Isaac";
let encendido: boolean = true;

devolverBoleanString(nombre, encendido);
// Transforma las 3 funciones anteriores a arrow function.



const saludar1 = (): void =>{
    console.log("Hola estoy void");
}

saludar1();

const saludar2 = (texto: string = "Hola a todos, esto ess TypeScript"): string =>{
    console.log(texto);
    return texto;
}

saludar2();


const devolverBoleanString2 = (nombre2:string = "Isaac", encendido2:boolean = true): Boolean | String =>{
 console.log("Mi nombre es ", nombre, "Y tengo la bombilla enciendida?", encendido);
    return nombre;
}

devolverBoleanString2();



