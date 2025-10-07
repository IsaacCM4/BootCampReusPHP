// --------------------
// Selección de elementos
// --------------------

// Botones zona comida
const btnRegar = document.getElementById("btn-regar");
const btnRecoger = document.getElementById("btn-recoger");
const btnAlimentar = document.getElementById("btn-alimentar");

// Elementos zona comida
const imgCampoZanahorias = document.getElementById("campoZanahoriasImg");
const cantidadRegadorasElem = document.getElementById("cantidadRegadoras");
const cantidadZanahoriasElem = document.getElementById("cantidadZanahorias");
const nivelDeHambreElem = document.getElementById("foodText");
const barraComida = document.getElementById("comida");

// --------------------
// Variables iniciales
// --------------------
let cantidadRegadoras = parseInt(cantidadRegadorasElem.textContent.replace("x", ""));
let cantidadZanahorias = parseInt(cantidadZanahoriasElem.textContent.replace("x", ""));
let nivelDeHambre = parseInt(nivelDeHambreElem.textContent.replace("Hambre:", "").replace("%", "").trim());
let regadas = false;

// --------------------
// Función para actualizar barra y texto de hambre
// --------------------
function actualizarHambre() {
    if (nivelDeHambre > 100) nivelDeHambre = 100;
    if (nivelDeHambre < 0) nivelDeHambre = 0;

    nivelDeHambreElem.textContent = "Hambre: " + nivelDeHambre + "%";
    barraComida.style.width = nivelDeHambre + "%";
}

// Inicializamos la barra al cargar
actualizarHambre();


// Botón regar

btnRegar.addEventListener("click", () => {
    if (cantidadRegadoras > 0 && !regadas) {
        cantidadRegadoras--;
        cantidadRegadorasElem.textContent = "x" + cantidadRegadoras;

        imgCampoZanahorias.src = "./imgtamagochi/zanahoriasGrandes.png";
        regadas = true;
    }
});


// Botón recoger

btnRecoger.addEventListener("click", () => {
    if (regadas) {
        const numZanahoriasCultivadas = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        cantidadZanahorias += numZanahoriasCultivadas;
        cantidadZanahoriasElem.textContent = "x" + cantidadZanahorias;

        imgCampoZanahorias.src = "./imgtamagochi/zanahoriasPequeñas.png";
        regadas = false;
    }
});


// Botón alimentar

btnAlimentar.addEventListener("click", () => {
    if (cantidadZanahorias > 0 && nivelDeHambre < 100) {
        cantidadZanahorias--;
        cantidadZanahoriasElem.textContent = "x" + cantidadZanahorias;

        nivelDeHambre += 5;
        actualizarHambre();
    } else if (cantidadZanahorias <= 0) {
        alert("No tienes zanahorias 😢");
    }
});
