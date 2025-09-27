//1. A partir de la pizza sustituías todos los elemento del array por cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩
let comiditas = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
let indicePizza = comiditas.indexOf("🍕");

for (let i = 0; i < comiditas.length; i++) {
    if (i > indicePizza) {
        comiditas[i] = "🍺";
    }
}
console.log(comiditas);
//2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕

let comiditas2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];

if (comiditas2.includes("🍍")) {
    console.log("🍕🍕🍍🍕🍕 exista una piña")
} else {
    console.log("no tiene una piña")
}

//3. Quita la piña del siguiente array.🍕🍕🍍🍕🍕

let commiditas3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];

commiditas3.splice(2, 1);
console.log(commiditas3);

//4. A partir del siguiente array 🍓🍋🍓🍋🍓convierte todas las fresas en 🍄

let comiditas4 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
for (let i = 0; i < comiditas4.length; i++) {
    if (comiditas4[i] == "🍓") {
        comiditas4[i] = "🍄";
    }
}

console.log(comiditas4);

//5. Añade el siguiente icono 🥵 inmediatamente después del cada 🌶️ en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛
let comiditas5 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];

for (let i = 0;  i < comiditas5.length; i++) {
    if (comiditas5[i] == "🌶️") {
        comiditas5.splice([i + 1], 0, "🥵");
    }
}

console.log(comiditas5);

//6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴

let cartitas = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];

for(let i = 0; i < cartitas.length; i++){
    if(cartitas[i] == "🎴" & cartitas[i +1] =="🎴"){
        cartitas.splice([i + 1], 0, "🃏");
    }
}

console.log(cartitas);