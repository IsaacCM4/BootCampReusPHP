const quiz = [
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Tierra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: "Júpiter"
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Miguel Ángel"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas"
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1969", "1959", "1972", "1980"],
    correctAnswer: "1969"
  },
  {
    question: "¿Cuál es el elemento químico con símbolo 'O'?",
    options: ["Oro", "Osmio", "Oxígeno", "Oganesón"],
    correctAnswer: "Oxígeno"
  },
  {
    question: "¿Cuál es el idioma más hablado en el mundo?",
    options: ["Español", "Inglés", "Chino mandarín", "Hindi"],
    correctAnswer: "Chino mandarín"
  },
  {
    question: "¿Qué instrumento tiene teclas, cuerdas y martillos?",
    options: ["Violín", "Piano", "Guitarra", "Arpa"],
    correctAnswer: "Piano"
  },
  {
    question: "¿Qué país ganó el Mundial de fútbol 2010?",
    options: ["Brasil", "España", "Alemania", "Italia"],
    correctAnswer: "España"
  },
  {
    question: "¿Cuál es la capital de Canadá?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Isabel Allende"],
    correctAnswer: "Gabriel García Márquez"
  }
];

const quizContainer = document.getElementById("quiz");

let numPregunta = 0;
let puntuacion = 0;

// Función principal: mostrar pregunta actual
function mostrarPregunta() {
  const preguntaActual = quiz[numPregunta];

  quizContainer.innerHTML = `
    <p id="pregunta">${preguntaActual.question}</p>
    <button class="respuesta">${preguntaActual.options[0]}</button>
    <button class="respuesta">${preguntaActual.options[1]}</button>
    <button class="respuesta">${preguntaActual.options[2]}</button>
    <button class="respuesta">${preguntaActual.options[3]}</button>
  `;

  // Añadir los eventos de click a los botones
  const botones = document.querySelectorAll(".respuesta");
  botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const seleccion = e.target.innerText;
      verificarRespuesta(seleccion);
    });
  });
}

// Verificar si la respuesta es correcta
function verificarRespuesta(seleccion) {
  const respuestaCorrecta = quiz[numPregunta].correctAnswer;
  if (seleccion === respuestaCorrecta) {
    puntuacion++;
  }

  numPregunta++;

  if (numPregunta < quiz.length) {
    mostrarPregunta();
  } else {
    mostrarResultadoFinal();
  }
}

// Mostrar la pantalla final con puntuación
function mostrarResultadoFinal() {
  quizContainer.innerHTML = `
    <h2>¡Quiz completado!</h2>
    <p>Tu puntuación es <strong>${puntuacion}</strong> de <strong>${quiz.length}</strong></p>
    <button id="reset">Reiniciar</button>
  `;

  document.getElementById("reset").addEventListener("click", reiniciarQuiz);
}

// Reiniciar el quiz
function reiniciarQuiz() {
  numPregunta = 0;
  puntuacion = 0;
  mostrarPregunta();
}

// Iniciar quiz al cargar
mostrarPregunta();
