// ¿Qué tipo de dato utilizarías para…?
// Limitar que solamente es introduzca un nombre en una variable. 
// Por ejemplo David en una variable

let nombre: string = "david";
// Limitar que solamente se pueda introducir un valor booleano en una variable.
// Por ejemplo: true o false.

let encendido: boolean = true;
// Limitar que solamente se pueda introducir un valor numérico en una variable
// Por ejemplo: 31

let numero: number = 1;
// Limitar que solamente se pueda introducir un valor booleano o numérico en una variable
// Por ejemplo: true o 1234

let numEncendido: number | boolean = 1234;
// ¿Qué pasa si no introducimos el tipo de dato correctamente? 
//! Nos saldra el valor de la variable marcado en rojo indicandonos un error
// ¿Se puede realizar la compilación?
//! No, nos dara error
// En caso de poderse explica/argumenta el porque el resultado de la compilación es el que es

//! Typescript es un lenguaje tipado por lo cual solo deja hacer la compilacion si insertamos los datos que corresponden al mismo
//! tipo de datos que hemos asignado a la variable