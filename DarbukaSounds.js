// Mapa de teclas a sonidos
const keySoundMap = {
  w: document.getElementById("sound1"),
  a: document.getElementById("sound2"),
  d: document.getElementById("sound3"),
  s: document.getElementById("sound4"),
  e: document.getElementById("sound5"),
};

// Reproduce sonido
function playSound(key) {
  const sound = keySoundMap[key];
  const button = document.querySelector(`button[data-key="${key}"]`);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 200);
  }
}

// Clicks en los botones
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => playSound(btn.dataset.key));
});

// Pulsaciones de teclado
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  playSound(key);
});
