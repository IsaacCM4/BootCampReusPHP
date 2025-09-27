//1. A partir de la pizza sustituías todos los elemento del array por cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩
let comiditas = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
let indicePizza = comiditas.indexOf("🍕");

for (let i = 0; i < comiditas.length; i++) {
    if (i > indicePizza) {
        comiditas[i] = "🍺";
    }
}
console.log(comiditas);
//2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕

let comiditas2 = ["🍕","🍕","🍍","🍕","🍕"];

if(comiditas2.includes("🍍")){
    console.log("🍕🍕🍍🍕🍕 exista una piña")
}else{
    console.log("no tiene una piña")
}

//3. Quita la piña del siguiente array.🍕🍕🍍🍕🍕

let commiditas3 = ["🍕","🍕","🍍","🍕","🍕"];

