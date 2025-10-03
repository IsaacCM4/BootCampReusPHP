 /*
   1. 🗣️ LA COMANDA: 🗣️
    🧑🏽‍🧑🏻‍🧒**-** **¡Camarero! ¡Camarero! Nos pone por favor una 🍔, un 🌭 con dos ** 🍟 ** y dos 🧋 por favor.
    🤵🏻‍♂️ - ¡Por supuesto, lo tengo todo anotado! **
    👩🏻‍💻** Coder **👨🏻‍💻 - Prepara la comanda utilizando:
    El método ** push() ** añadiendo una **🍔**, un **🌭** a partir del siguiente array:
  */

const dinner = []; 
dinner.push('🍔','🌭');
console.log(dinner);
//Output: []
//Expected output: ['🍔', '🌭']

/*
 2.🗣️ 1ª RECLAMACIÓN: 🗣️
🧑🏽‍🧑🏻‍🧒 - ¡CAMARERO! ¡Camarero! Nos faltan las bebidas (2x🧋) y las patatas (2x🍟).
¡El camarero se ha dejado cosas! 
🤵🏻‍♂️ - Disculpe el error, Ahora mismo señor 🕺🏻¡Voy bailando!🕺🏻
*/

dinner.push('🍟','🍟');
console.log(dinner);
/*
3.🗣️ 2ª RECLAMACIÓN: 🗣️
🧑🏽‍🧑🏻‍🧒 - ¡CAMARERO! ¡CAMARERO! Nos faltan dos bebidas 🧋
🤵🏻‍♂️ - ¡Voyyyyyy…!🏃🏻‍♂️💨
¡Vamos a echarle otra manita 👋🏻! */

dinner.push('🧋', '🧋');
console.log(dinner);

/*
👩🏻‍💻Coder👨🏻‍💻 - Necesito que inviertas el array de tal forma que le expliquemos al camarero 
el orden que tienen que tener las comandas quedando este de la siguiente manera:
*/
/*Metodo 1*/
const dinner1 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 
console.log(dinner1.reverse());

/*Metodo 2*/
const dinner2 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋'];
const dinner2Ordenado = [];
for(var i = dinner2.length -1; i >= 0; i--){
    dinner2Ordenado.push(dinner2[i]);
}
console.log("Metodo 2")
console.log(dinner2Ordenado);

/*Metodo 3*/

const dinner3 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 

for(var i = 0; i < Math.floor(dinner3.length / 2); i++ ){
   const temp = dinner3[i];
    dinner3[i] = dinner3[dinner3.length - 1 - i];
    dinner3[dinner3.length - 1 - i] = temp;   
}
console.log("Metodo 3");
console.log(dinner3);

/*Metodo 4*/
const dinner4 = ['🍔', '🌭', '🍟', '🍟', '🍕', '🧋', '🧋']; 

dinner4.forEach((element, index, array) => {
	const reversedIndex = array.length - 1 - index;
	if (index < reversedIndex) {
		[array[index], array[reversedIndex]] = [array[reversedIndex], array[index]];
	}
});
console.log("Metodo 4");
console.log(dinner);
/* 5.
🗣️ UNA NUEVA COMANDA: 🗣️
👱🏽‍♂️ - ¡CAMARERO! ¡Camarero! Un cervecita 🍺  y un 🥪 por favor
🤵🏻‍♂️ - ¡Marchando señor!
👨🏻‍🦰 - ¡CAMARERO! ¡Camarero! Un cervecita 🍺 y unos cacahuetes 🥜 por favor
🤵🏻‍♂️ - ¡Marchando señor!
Justo en ese momento el cliente se encuentra con un amigo que también tenía otra cuenta junta
👨🏻‍🦰👱🏽‍♂️ - ¡CAMARERO! ¡Camarero! ¿Nos podrías juntar las cuentas por favor?
🤵🏻‍♂️ - ¡Por supuesto caballeros!
*/

var comanda1 = ['🍺','🥪'];
var comanda2 = ['🍺','🥜'];   
var comandacombinada = comanda1.concat(comanda2);
console.log(comandacombinada);

var comanda1 = ["🍺", "🍺", "🥜"];
var comanda2 = ["🍺", "🥪", "🥙"];

var comandacombinada = [...comanda1, ...comanda2];
console.log(comandacombinada);

var comanda1 = ['🍺', '🍺', '🥜'];
var comanda2 = ['🍺', '🥪', '🥙'];

var comandacombinada = [];
comandacombinada.push.apply(comandacombinada, comanda1);
comandacombinada.push.apply(comandacombinada, comanda1);

console.log(combinedTicket);

var ticket01 = ['🍺', '🍺', '🥜'];
var ticket02 = ['🍺', '🥪', '🥙'];

var combinedTicket = [];

for (let i = 0; i < ticket01.length; i++) {
	combinedTicket.push(ticket01[i]);
}

for (let i = 0; i < ticket02.length; i++) {
	combinedTicket.push(ticket02[i]);
}

console.log(combinedTicket);

var ticket01 = ["🍺", "🍺", "🥜"];
var ticket02 = ["🍺", "🥪", "🥙"];

var combinedTicket = [];

ticket01.forEach((element) => combinedTicket.push(element));
ticket02.forEach((element) => combinedTicket.push(element));

console.log(combinedTicket);




/*🗣️ PAGÁN EL TICKET: 🗣️
👨🏻‍🦰👱🏽‍♂️ - ¡CAMARERO! Nos hace la cuenta por favor
🤵🏻‍♂️ - ¡Ahora mismo!
👨🏻‍🦰👱🏽‍♂️ - Disculpe, creo que hay un par de errores, nosotros no hemos pedido ni 🥙 y también sobra una cerveza */

var commandaEquivocada = ['🍺', '🍺', '🍺', '🥜', '🍺', '🥪', '🥙']; 

commandaEquivocada.pop();
commandaEquivocada.shift();
console.log(commandaEquivocada);


/*7.
🗣️ CALCULANDO EL TOTAL: 🗣️
👨🏻‍🦰👱🏽‍♂️ - ¡CAMARERO! Me he dejado las gafas 🥸 y no llego a ver bien la carta. ¿Tienen platos de comida Méxicana? ¿Y Japonesa? Ajam ¿Española también? ¿Comida Noruega no habrá por casualidad?
🤵🏻‍♂️ - El camarero empieza a decir muchos síes y también muchos noes.
👨🏻‍🦰👱🏽‍♂️ - Ajam, ya veo y me podría decir los platos de la categoría… */

/*Tarea 1*/
