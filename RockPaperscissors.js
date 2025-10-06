const manoIzquierda = document.getElementById("manoIzquierda");
const imgManoIzquierda = document.querySelector("#manoIzquierda img");
const imgManoDerecha = document.querySelector("#manoDerecha img")
const manoDerecha = document.getElementById("manoDerecha");
const botonJugar = document.getElementById("jugar");
const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijeras = document.getElementById("tijeras");
const reiniciar = document.getElementById("reiniciar");
const marcadorIzquierdo = document.getElementById("puntacionIzquierda");
const marcadorDerecho = document.getElementById("puntacionDrecha");
let puntacionIzqueirda = 0;
let puntacionDerecha = 0;
let animacionInterval;

function iniciarAnimacion() {
    let arriba = false;

    // Limpiamos animacion
    clearInterval(animacionInterval);

    animacionInterval = setInterval(() => {
        arriba = !arriba;
        let offset;
        if (arriba) {
            offset = -50;
        } else {
            offset = 0;
        }
        manoIzquierda.style.transform = `translateY(${offset}px)`;
        manoDerecha.style.transform = `translateY(${offset}px)`;
    }, 300);

}

function detenerAnimacion(mano) {
    clearInterval(animacionInterval);

    // Elegir una jugada aleatoria como ejemplo
    const opciones = ["./imgRockPaperScissors/puño.png",
        "./imgRockPaperScissors/mano.png",
        "./imgRockPaperScissors/manosTijerasDerecha.png"];
    const jugadaDerecha = Math.floor(Math.random() * 3);


    // Dejar manos abajo
    manoIzquierda.style.transform = `translateY(0)`;
    manoDerecha.style.transform = `translateY(0)`;
    imgManoIzquierda.src = mano;
    imgManoDerecha.src = opciones[jugadaDerecha];
    resolverPuntuacion(mano, opciones[jugadaDerecha]);
}

function resolverPuntuacion(manoIzq, manoDer) {
    //Mano izquierda piedra Mano derecha tijeras
    if (manoIzq == "./imgRockPaperScissors/puño.png" && manoDer == "./imgRockPaperScissors/manosTijerasDerecha.png") {
        puntacionIzqueirda++;
        marcadorIzquierdo.innerHTML = puntacionIzqueirda;
    }

    //Mano izquierda papel Mano derehca tijeras 

    if (manoIzq == "./imgRockPaperScissors/mano.png" && manoDer == "./imgRockPaperScissors/manosTijerasDerecha.png") {
        puntacionDerecha++;
        marcadorDerecho.innerHTML = puntacionDerecha;
    }

    //Mano izquierda tijeras Mano derecha tijeras

    if (manoIzq == "./imgRockPaperScissors/manoTijerasIzquierda.png" && manoDer == "./imgRockPaperScissors/manosTijerasDerecha.png") {

        //Empate
    }

    //Mano izquierda piedra  Mano derecha papel

    if (manoIzq == "./imgRockPaperScissors/puño.png" && manoDer == "./imgRockPaperScissors/mano.png") {
        puntacionDerecha++;
        marcadorDerecho.innerHTML = puntacionDerecha;
    }

    //Mano izquierda papel Mano derecha papel

    if (manoIzq == "./imgRockPaperScissors/mano.png" && manoDer == "./imgRockPaperScissors/mano.png") {

        // Empate
    }

    //Mano izquierda tijeras Mano derecha papel

    if (manoIzq == "./imgRockPaperScissors/manosTijerasIzquierda.png" && manoDer == "./imgRockPaperScissors/mano.png") {
        puntacionIzqueirda++;
        marcadorIzquierdo.innerHTML = puntacionIzqueirda;
    }

    //Mano izquierda piedra Mano derecha piedra

    if (manoIzq == "./imgRockPaperScissors/puño.png" && manoDer == "./imgRockPaperScissors/puño.png") {

        //Empate
    }

    //Mano izquierda papel Mano derecha piedra
    if (manoIzq == "./imgRockPaperScissors/mano.png" && manoDer == "./imgRockPaperScissors/puño.png") {
        puntacionIzqueirda++;
        marcadorIzquierdo.innerHTML = puntacionIzqueirda;
    }

    //Mano izquierda tijeras Mano derecha piedra

       if (manoIzq == "./imgRockPaperScissors/manosTijerasIzquierda.png" && manoDer == "./imgRockPaperScissors/puño.png") {
        puntacionDerecha++;
        marcadorDerecho.innerHTML = puntacionDerecha;
    }
}
function reiniciarPuntacion(){
    marcadorIzquierdo.innerHTML = 0;
    marcadorDerecho.innerHTML = 0;
}
botonPiedra.addEventListener("click", () => {
    let mano = "./imgRockPaperScissors/puño.png";
    //Animacion
    iniciarAnimacion();

    setTimeout(() => {
        detenerAnimacion(mano);
    }, 2000);


});

botonPapel.addEventListener("click", () => {
    let mano = "./imgRockPaperScissors/mano.png"
    //Animacion
    iniciarAnimacion();
    // Después de 3 segundos, se detiene
    setTimeout(() => {
        detenerAnimacion(mano);
    }, 2000);
});

botonTijeras.addEventListener("click", () => {
    let mano = "./imgRockPaperScissors/manosTijerasIzquierda.png";
    //Animacion
    iniciarAnimacion();
    // Después de 3 segundos, se detiene
    setTimeout(() => {
        detenerAnimacion(mano);
    }, 2000);
});

reiniciar.addEventListener("click", () =>{
    reiniciarPuntacion();
});
