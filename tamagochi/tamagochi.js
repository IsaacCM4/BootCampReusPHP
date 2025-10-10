// --------------------
// Selección de elementos
// --------------------

// Botones zona comida
const btnRegar = document.getElementById("btn-regar");
const btnRecoger = document.getElementById("btn-recoger");
const btnAlimentar = document.getElementById("btn-alimentar");
const btnComprarZanahorias = document.getElementById("btn-comprarZanahoria");
const btnComprarRegadoras = document.getElementById("btn-comprarRegadora");

// Elementos zona comida
const imgCampoZanahorias = document.getElementById("campoZanahoriasImg");
const cantidadRegadorasElem = document.getElementById("cantidadRegadoras");
const cantidadZanahoriasElem = document.getElementById("cantidadZanahorias");
const nivelDeHambreElem = document.getElementById("foodText");
const barraComida = document.getElementById("comida");

// Elementos zona juego
const nivelDeDiversionElem = document.getElementById("funText");
const cantidadMonedasElem = document.getElementById("cantidadMonedas");
const barraDiversion = document.getElementById("diversion");
const btnJuegoClickRapido = document.getElementById("juegoClics");
const btnVolver = document.getElementById("volverTamagochi");
const btnJuegoMemoria = document.getElementById("juegoMemoria");

//Elementos zona entrenamiento
const sacoDeBoxeo = document.getElementById("sacoBoxeoIMG");
const cantidadGolpesElem = document.getElementById("numGolpes");
const btnMejorarGuante = document.getElementById("MejorarGuante");
const strengthBar = document.getElementById("strength");
const strengthText = document.getElementById("strengthText");

let nivelGuante = 0;
let nivelStrength = 1;
let progresoStrength = 0;
let golpesNecesarios = 10;


//Elementos zona dormitorio
const lampara = document.getElementById("lampara");
const overlay = document.getElementById("overlay");

// --------------------
// Variables iniciales
// --------------------
let cantidadRegadoras = parseInt(cantidadRegadorasElem.textContent.replace("x", ""));
let cantidadZanahorias = parseInt(cantidadZanahoriasElem.textContent.replace("x", ""));
let nivelDeHambre = parseInt(nivelDeHambreElem.textContent.replace("Hambre:", "").replace("%", "").trim());
let cantidadMonedas = parseInt(cantidadMonedasElem.textContent.replace("x", ""));
let nivelDeDiversion = parseInt(nivelDeDiversionElem.textContent.replace("Diversión:", "").replace("%", "").trim());
let cantidadGolpes = parseInt(numGolpes.textContent.replace("x", ""));
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
    alert("No tienes zanahorias");
  }
});

//Logica de comprar regadoras

btnComprarZanahorias.addEventListener("click", () => {
  if (cantidadMonedas >= 5) {
    cantidadMonedas -= 5;
    cantidadMonedasElem.textContent = "x" + cantidadMonedas;

    // Sumamos zanahorias
    cantidadZanahorias++;
    cantidadZanahoriasElem.textContent = "x" + cantidadZanahorias;

    // Aplicar parpadeo
    cantidadZanahoriasElem.classList.add("parpadeo-verde");
    cantidadMonedasElem.classList.add("parpadeo-rojo");

    // Quitar la clase después de 0.5 segundos
    setTimeout(() => {
      cantidadZanahoriasElem.classList.remove("parpadeo-verde");
      cantidadMonedasElem.classList.remove("parpadeo-rojo");
    }, 500);
  } else {
    alert("No tienes suficientes monedas");
  }
});

btnComprarRegadoras.addEventListener("click", () =>{
  if(cantidadMonedas >= 5){
    cantidadMonedas -= 10;
    cantidadMonedasElem.textContent = "x" + cantidadMonedas;

    //Suma regadoras
    cantidadRegadoras++;
    cantidadRegadorasElem.textContent = "x" + cantidadRegadoras;

    // Aplicar parpadeo
    cantidadRegadorasElem.classList.add("parpadeo-verde");
    cantidadMonedasElem.classList.add("parpadeo-rojo");

    // Quitar la clase después de 0.5 segundos
    setTimeout(() => {
      cantidadRegadorasElem.classList.remove("parpadeo-verde");
      cantidadMonedasElem.classList.remove("parpadeo-rojo");
    }, 500);
  } else {
    alert("No tienes suficientes monedas");
  }

});


// -------------------------
// SISTEMA DE MINIJUEGOS
// -------------------------
const zonaMinijuego = document.getElementById("zonaMinijuego");
const contenedorMinijuego = document.getElementById("contenedorMinijuego");
const tituloMinijuego = document.getElementById("tituloMinijuego");
const volverTamagochi = document.getElementById("volverTamagochi");

let monedas = 0;

// Mostrar u ocultar el minijuego

function abrirMinijuego(nombre, callback) {
  const zonaMinijuego = document.getElementById("zonaMinijuego");
  const tituloMinijuego = document.getElementById("tituloMinijuego");
  const contenedorMinijuego = document.getElementById("contenedorMinijuego");

  // Limpiamos contenido y estilos previos
  contenedorMinijuego.innerHTML = "";
  contenedorMinijuego.style.display = "flex";       // Estado base
  contenedorMinijuego.style.flexDirection = "column";
  contenedorMinijuego.style.alignItems = "center";
  contenedorMinijuego.style.justifyContent = "center";
  contenedorMinijuego.style.width = "100%";
  contenedorMinijuego.style.height = "100%";
  contenedorMinijuego.style.gap = "20px";
  contenedorMinijuego.style.textAlign = "center";

  // Mostrar título
  tituloMinijuego.textContent = nombre;

  // Mostrar el panel
  zonaMinijuego.classList.remove("oculto");

  // Llama al minijuego específico
  callback();
}

function cerrarMinijuego() {
  const contenedorMinijuego = document.getElementById("contenedorMinijuego");
  const zonaMinijuego = document.getElementById("zonaMinijuego");

  // Limpiamos contenido y estilos
  contenedorMinijuego.innerHTML = "";
  contenedorMinijuego.style = ""; // Resetea todos los estilos inline

  // Ocultamos panel
  zonaMinijuego.classList.add("oculto");

  // Limpiamos intervalos de cualquier juego
  if (intervaloClicRapido) {
    clearInterval(intervaloClicRapido);
    intervaloClicRapido = null;
  }

  // Aquí podrías limpiar otros intervalos de otros juegos si los tienes
}

function calcularDiversion() {
  if (nivelDeDiversion < 100) {
    nivelDeDiversionElem.textContent = "Diversión: " + nivelDeDiversion + "%";
    barraDiversion.style.width = nivelDeDiversion + "%";
  }

  if (nivelDeDiversion > 100) {
    nivelDeDiversion = 100;
    nivelDeDiversionElem.textContent = "Diversión: " + nivelDeDiversion + "%";
    barraDiversion.style.width = nivelDeDiversion + "%";
  }
}
function abrirMinijuego(nombre, callback) {
  const zonaMinijuego = document.getElementById("zonaMinijuego");
  const tituloMinijuego = document.getElementById("tituloMinijuego");
  const contenedorMinijuego = document.getElementById("contenedorMinijuego");

  // Limpia contenido anterior y muestra título
  tituloMinijuego.textContent = nombre;
  contenedorMinijuego.innerHTML = "";

  // Muestra el panel
  zonaMinijuego.classList.remove("oculto");

  // Llama al minijuego específico
  callback();
}



// Botón volver
volverTamagochi.addEventListener("click", cerrarMinijuego);

// -------------------------
// MINIJUEGO: Reacción
// -------------------------
document.getElementById("juegoReaccion").addEventListener("click", () => {
  abrirMinijuego("Juego de Reacción", iniciarJuegoReaccion);
  overlay.classList.remove("activo");
});

function iniciarJuegoReaccion() {
  
  let inicioTiempo, finTiempo;
  const tiempoAleatorio = Math.random() * 3000 + 1000; // entre 1 y 4 seg

  const mensaje = document.createElement("p");
  mensaje.textContent = "Espera a que aparezca el círculo verde...";
  contenedorMinijuego.appendChild(mensaje);

  setTimeout(() => {
    contenedorMinijuego.innerHTML = "";
    const objetivo = document.createElement("div");
    objetivo.classList.add("objetivo");

    // posición aleatoria dentro del contenedor
    const x = Math.random() * (contenedorMinijuego.offsetWidth - 60);
    const y = Math.random() * (contenedorMinijuego.offsetHeight - 60);
    objetivo.style.left = `${x}px`;
    objetivo.style.top = `${y}px`;

    contenedorMinijuego.appendChild(objetivo);

    inicioTiempo = Date.now();

    objetivo.addEventListener("click", () => {
      finTiempo = Date.now();
      const tiempoReaccion = finTiempo - inicioTiempo;

      // Sistema de recompensa
      let ganancia = 0;
      if (tiempoReaccion < 250) ganancia = 10;
      else if (tiempoReaccion < 400) ganancia = 5;
      else if (tiempoReaccion < 600) ganancia = 2;

      cantidadMonedas += ganancia;
      cantidadMonedasElem.textContent = "x" + cantidadMonedas;
      nivelDeDiversion += 10;
      calcularDiversion();

      // Mensaje final estilizado
      contenedorMinijuego.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      gap: 20px;
      text-align: center;
      color: #fff;
      font-family: Arial, sans-serif;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 20px;
      border-radius: 10px;
    ">
      <h2 style="
        font-size: 2rem;
        color: #ffdd57;
        text-shadow: 2px 2px 4px #000;
      ">¡Juego terminado!</h2>

      <p style="
        font-size: 1.5rem;
        margin: 0;
      ">Tu tiempo fue de ${tiempoReaccion} ms</p>

      <p style="
        font-size: 1.3rem;
        margin: 0;
        color: #7efc7e;
        font-weight: bold;
      ">${ganancia > 0 ? `¡Ganaste ${ganancia} monedas 🎉` : "Muy lento... sin recompensa"}</p>

      <p style="
        font-size: 1.2rem;
        margin: 0;
      ">Total monedas: ${cantidadMonedas}</p>
  `;

      // Centramos el contenido
      contenedorMinijuego.style.display = "flex";
      contenedorMinijuego.style.alignItems = "center";
      contenedorMinijuego.style.justifyContent = "center";

      // Listener para volver al Tamagochi
      document.getElementById("volverTamagochiFinal").addEventListener("click", () => {
        cerrarMinijuego();
      });
    });

  }, tiempoAleatorio);


}


//Juego de clics rapidos

//Entrar en el juego
btnJuegoClickRapido.addEventListener("click", () => {
  abrirMinijuego("Clic Rápido", iniciarJuegoClics);
  overlay.classList.remove("activo");
});

//Volver a pantalla incial
btnVolver.addEventListener("click", () => {
  document.getElementById("zonaMinijuego").classList.add("oculto");
  
});
let intervaloClicRapido; // Variable global para el setInterval del clic rápido

function iniciarJuegoClics() {
  const contenedorMinijuego = document.getElementById("contenedorMinijuego");

  // Limpiamos cualquier intervalo anterior
  if (intervaloClicRapido) {
    clearInterval(intervaloClicRapido);
    intervaloClicRapido = null;
  }

  contenedorMinijuego.innerHTML = `
    <div id="juegoClicRapido" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; height: 100%; text-align: center;">
      <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">
        Haz clic lo más rápido posible durante <strong>5 segundos</strong> 
      </h3>
      <p id="contadorClics" style="font-size: 1.1rem;">Clics: 0</p>
      <button id="botonClicRapido" class="pixel-btn" style="text-align: center; font-size: 1.5rem; padding: 1rem 2rem; border: 2px solid #333; border-radius: 12px; cursor: pointer; transition: transform 0.1s;">
        ¡CLIC!
      </button>
      <p id="tiempoRestante" style="font-size: 1rem; color: #666;">Tiempo: 5s</p>
    </div>
  `;

  let clics = 0;
  let tiempo = 5;

  const boton = document.getElementById("botonClicRapido");
  const contadorClics = document.getElementById("contadorClics");
  const tiempoRestante = document.getElementById("tiempoRestante");

  // Listener del botón
  const clickHandler = () => {
    clics++;
    contadorClics.textContent = `Clics: ${clics}`;
  };
  boton.addEventListener("click", clickHandler);

  // Contador de tiempo
  intervaloClicRapido = setInterval(() => {
    tiempo--;
    tiempoRestante.textContent = `Tiempo: ${tiempo}s`;

    if (tiempo <= 0) {
      clearInterval(intervaloClicRapido);
      intervaloClicRapido = null;
      boton.disabled = true;

      // Mostrar resultado
      contenedorMinijuego.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; width:100%; gap:20px; text-align:center; color:#fff; font-family:Arial, sans-serif; background-color:rgba(0,0,0,0.8); padding:20px; border-radius:10px;">
          <h2 style="font-size:2rem; color:#ffdd57; text-shadow:2px 2px 4px #000;">¡Tiempo terminado!</h2>
          <p style="font-size:1.5rem; margin:0;">Hiciste ${clics} clics 👏</p>
          <p style="font-size:1.3rem; margin:0; color:#7efc7e; font-weight:bold;">Ganaste ${Math.ceil(clics/2)} monedas 🎉</p>
        </div>
      `;

      cantidadMonedas += Math.ceil(clics / 2);
      cantidadMonedasElem.textContent = "x" + cantidadMonedas;
      nivelDeDiversion += 10;
      calcularDiversion();
    }
  }, 1000);
}


//Juego de memoria
btnJuegoMemoria.addEventListener("click", () => {
  overlay.classList.remove("activo");
  abrirMinijuego("Juego de Memoria", iniciarJuegoMemoria);
});

function iniciarJuegoMemoria() {
  const contenedor = document.getElementById("contenedorMinijuego");
  contenedor.innerHTML = ""; // limpia contenido previo

  const filas = 2;
  const columnas = 4;
  const colores = ["red", "blue", "green", "yellow"];
  const tarjetas = colores.concat(colores); // duplicamos para pares
  tarjetas.sort(() => Math.random() - 0.5); // mezclamos aleatoriamente

  // Configuramos el contenedor como grid
  contenedor.style.display = "grid";
  contenedor.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
  contenedor.style.gridGap = "10px";
  contenedor.style.justifyItems = "center";
  contenedor.style.alignItems = "center";

  let primerTarjeta = null;
  let segundoTarjeta = null;
  let bloqueado = false;
  let parejasEncontradas = 0;

  tarjetas.forEach((color) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const inner = document.createElement("div");
    inner.classList.add("tarjeta-inner");

    const front = document.createElement("div");
    front.classList.add("tarjeta-front");

    const back = document.createElement("div");
    back.classList.add("tarjeta-back");
    back.style.backgroundColor = color;

    inner.appendChild(front);
    inner.appendChild(back);
    tarjeta.appendChild(inner);
    contenedor.appendChild(tarjeta);
    tarjeta.addEventListener("click", () => {
      if (bloqueado || tarjeta.classList.contains("volteada")) return;

      tarjeta.classList.add("volteada");

      if (!primerTarjeta) {
        primerTarjeta = tarjeta;
      } else {
        segundoTarjeta = tarjeta;
        bloqueado = true;
        setTimeout(() => {
          const color1 = primerTarjeta.querySelector(".tarjeta-back").style.backgroundColor;
          const color2 = segundoTarjeta.querySelector(".tarjeta-back").style.backgroundColor;

          if (color1 === color2) {
            primerTarjeta = null;
            segundoTarjeta = null;
            bloqueado = false;
            cantidadMonedas += 1;
            cantidadMonedasElem.textContent = "x" + cantidadMonedas;
            nivelDeDiversion += 5;
            calcularDiversion();

            parejasEncontradas++;
            if (parejasEncontradas === colores.length) {
              contenedor.innerHTML = `<div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial, sans-serif;
  ">
    
    <p style="
      font-size: 1.5rem;
      margin: 0;
    ">Completaste el juego de memoria</p>
    
    <p style="
      font-size: 1.3rem;
      margin: 0;
      color: #7efc7e;
      font-weight: bold;
    ">Ganaste ${colores.length} monedas 🎉</p>
    
  </div>
`;
              contenedor.style.display = "flex";
              contenedor.style.alignItems = "center";
              contenedor.style.justifyContent = "center";
            }
          } else {
            // No coinciden: dar la vuelta después de 1 seg
            setTimeout(() => {
              primerTarjeta.classList.remove("volteada");
              segundoTarjeta.classList.remove("volteada");
              primerTarjeta = null;
              segundoTarjeta = null;
              bloqueado = false;
            }, 1000);
          }
        }, 500);
      }
    });
  });
}

// Zona de entrenamiento
function actualizarBarraStrength() {
  const porcentaje = Math.min((progresoStrength / golpesNecesarios) * 100, 100);
  strengthBar.style.width = porcentaje + "%";
  strengthText.textContent = `Level: ${nivelStrength}`;
}

sacoDeBoxeo.addEventListener("click", () => {
  // Cada golpe cuenta
  cantidadGolpes++;
  cantidadGolpesElem.textContent = "x" + cantidadGolpes;

  progresoStrength += nivelStrength*(1.5);

  // Si llega o supera los golpes necesarios → subir de nivel
  if (progresoStrength >= golpesNecesarios) {
    nivelStrength++;
    progresoStrength = 0; // reiniciar progreso

    // Aumentar la dificultad (más golpes por nivel)
    golpesNecesarios = Math.floor(golpesNecesarios * 1.5);

    // Efecto visual al subir de nivel
    strengthBar.classList.add("subida-nivel");
    setTimeout(() => strengthBar.classList.remove("subida-nivel"), 600);

    // Mensaje temporal
    const msg = document.createElement("div");
    msg.textContent = `¡Subiste al nivel ${nivelStrength} de fuerza! 💪`;
    msg.style.position = "absolute";
    msg.style.top = "50%";
    msg.style.left = "50%";
    msg.style.transform = "translate(-50%, -50%)";
    msg.style.background = "rgba(0,0,0,0.8)";
    msg.style.color = "#7efc7e";
    msg.style.padding = "10px 20px";
    msg.style.borderRadius = "10px";
    msg.style.fontFamily = "Press Start 2P";
    msg.style.fontSize = "0.8rem";
    msg.style.zIndex = "999";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1200);
  }

  actualizarBarraStrength();

  // Animación del golpe
  sacoDeBoxeo.classList.add("golpe");
  setTimeout(() => {
    sacoDeBoxeo.classList.remove("golpe");
  }, 200);
});



// --- Sistema de mejora de guantes ---
btnMejorarGuante.addEventListener("click", () => {
  // Calculamos el precio según el nivel actual
  let precioMejora = 0;
  if (nivelGuante === 0) precioMejora = 40;
  else if (nivelGuante === 1) precioMejora = 100;
  else if (nivelGuante === 2) precioMejora = 200;
  else {
    alert("Tu guante ya está al máximo nivel 🥇");
    return;
  }

  // Mostrar el panel de confirmación
  document.getElementById("zonaMinijuego").classList.remove("oculto");

  contenedorMinijuego.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      gap: 20px;
      text-align: center;
      color: #fff;
      font-family: 'Press Start 2P', monospace;
      background-color: rgba(0, 0, 0, 0.85);
      padding: 20px;
      border-radius: 10px;
    ">
      <h2 style="font-size: 1.5rem; color: #ffdd57;">¡Mejora de Guante!</h2>
      <p style="font-size: 1rem;">
        Tu guante está en nivel <span style="color:#7efc7e;">${nivelGuante}</span><br>
        Mejorarlo cuesta <span style="color:#ff5757;">${precioMejora}</span> monedas 💰
      </p>
      <div style="display: flex; gap: 30px; margin-top: 15px;" >
        <button class="pixel-btn" id="confirmarMejora" style="padding: 10px 20px;">Sí</button>
        <button class="pixel-btn" id="cancelarMejora" style="padding: 10px 20px;">No</button>
      </div>
    </div>
  `;

  contenedorMinijuego.style.display = "flex";
  contenedorMinijuego.style.alignItems = "center";
  contenedorMinijuego.style.justifyContent = "center";

  // --- Botón “Sí” ---
  document.getElementById("confirmarMejora").addEventListener("click", () => {
    if (cantidadMonedas >= precioMejora) {
      cantidadMonedas -= precioMejora;
      cantidadMonedasElem.textContent = "x" + cantidadMonedas;
      nivelGuante++;

      // Efecto visual
      cantidadMonedasElem.classList.add("parpadeo-rojo");
      setTimeout(() => cantidadMonedasElem.classList.remove("parpadeo-rojo"), 500);

      contenedorMinijuego.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          gap: 15px;
          text-align: center;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.85);
          border-radius: 10px;
        ">
          <h2 style="font-size: 1.5rem; color: #7efc7e;">¡Guante Mejorado! 🥊</h2>
          <p style="font-size: 1rem;">Ahora tu guante es nivel ${nivelGuante}</p>
          <button class="pixel-btn" id="volverTamagochiFinal" style="padding: 10px 20px;">Volver</button>
        </div>
      `;

      document.getElementById("volverTamagochiFinal").addEventListener("click", cerrarMinijuego);
    } else {
      // Si no tiene suficientes monedas
      contenedorMinijuego.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          gap: 15px;
          text-align: center;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.85);
          border-radius: 10px;
        ">
          <h2 style="font-size: 1.5rem; color: #ff5757;">No tienes suficientes monedas 😢</h2>
          <p>Te faltan ${precioMejora - cantidadMonedas} monedas</p>
          <button class="pixel-btn" id="volverTamagochiFinal" style="padding: 10px 20px;">Volver</button>
        </div>
      `;
      document.getElementById("volverTamagochiFinal").addEventListener("click", cerrarMinijuego);
    }
  });

  // --- Botón “No” ---
  document.getElementById("cancelarMejora").addEventListener("click", cerrarMinijuego);
});

//Zona dormitorio
lampara.addEventListener("click", () => {
overlay.classList.toggle("activo");
lampara.classList.toggle("on")
});
