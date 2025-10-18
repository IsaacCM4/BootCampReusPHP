// === NÚMEROS ===
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");

// === OPERADORES ===
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnDividir = document.getElementById("dividir");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDecimal = document.getElementById("decimal");
const btnBorrar = document.getElementById("borrar");
const btnReset = document.getElementById("reset");
const btnCalcular = document.getElementById("calcular");

// === DISPLAY ===
let displayNums = document.getElementById("numerosEnCalc");

// === VARIABLES DE CONTROL ===
let num1calc = "";
let num2calc = "";
let operador = "";
let primerNum = true;

// === FUNCIONES ===

// Mostrar en display
function actualizarDisplay(valor) {
  displayNums.innerHTML = valor;
}

// Agregar número
function agregarNumero(numero) {
  if (primerNum) {
    num1calc += numero;
    actualizarDisplay(num1calc);
  } else {
    num2calc += numero;
    actualizarDisplay(num2calc);
  }
}

// Seleccionar operador
function seleccionarOperador(op) {
  if (num1calc === "") return; // No hacer nada si no hay primer número
  operador = op;
  primerNum = false;
}

// Calcular resultado
function calcular() {
  if (num1calc === "" || num2calc === "" || operador === "") return;

  const n1 = parseFloat(num1calc);
  const n2 = parseFloat(num2calc);
  let resultado;

  switch (operador) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "x":
      resultado = n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        resultado = "Error";
      } else {
        resultado = n1 / n2;
      }
      break;
    default:
      return;
  }

  actualizarDisplay(resultado);
  num1calc = resultado.toString();
  num2calc = "";
  operador = "";
  primerNum = true;
}

// Borrar último dígito
function borrar() {
  if (primerNum) {
    num1calc = num1calc.slice(0, -1);
    actualizarDisplay(num1calc || "0");
  } else {
    num2calc = num2calc.slice(0, -1);
    actualizarDisplay(num2calc || "0");
  }
}

// Resetear todo
function resetear() {
  num1calc = "";
  num2calc = "";
  operador = "";
  primerNum = true;
  actualizarDisplay("0");
}

// Agregar decimal
function agregarDecimal() {
  if (primerNum) {
    if (!num1calc.includes(".")) {
      num1calc += num1calc ? "." : "0.";
      actualizarDisplay(num1calc);
    }
  } else {
    if (!num2calc.includes(".")) {
      num2calc += num2calc ? "." : "0.";
      actualizarDisplay(num2calc);
    }
  }
}

// === EVENTOS ===
num1.addEventListener("click", () => agregarNumero("1"));
num2.addEventListener("click", () => agregarNumero("2"));
num3.addEventListener("click", () => agregarNumero("3"));
num4.addEventListener("click", () => agregarNumero("4"));
num5.addEventListener("click", () => agregarNumero("5"));
num6.addEventListener("click", () => agregarNumero("6"));
num7.addEventListener("click", () => agregarNumero("7"));
num8.addEventListener("click", () => agregarNumero("8"));
num9.addEventListener("click", () => agregarNumero("9"));
num0.addEventListener("click", () => agregarNumero("0"));

btnDecimal.addEventListener("click", agregarDecimal);

btnSumar.addEventListener("click", () => seleccionarOperador("+"));
btnRestar.addEventListener("click", () => seleccionarOperador("-"));
btnMultiplicar.addEventListener("click", () => seleccionarOperador("x"));
btnDividir.addEventListener("click", () => seleccionarOperador("/"));

btnBorrar.addEventListener("click", borrar);
btnReset.addEventListener("click", resetear);
btnCalcular.addEventListener("click", calcular);

// Mostrar 0 al iniciar
actualizarDisplay("0");
