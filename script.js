const pantalla = document.getElementById("pantalla");
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const sonido = document.getElementById("boing");

// Función para mover botón
function moverAleatoriamente(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  btn.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

// Pantalla positiva
btnSi.addEventListener("click", () => {
  pantalla.innerHTML = `
    <div class="fade">
      <img src="abrazo.gif" alt="gatito abrazo" class="gif">
      <h1>¡Abrazo virtual enviado con todo mi cariño! 💖</h1>
      <p>Que este abrazo te recuerde lo especial que eres 🌟</p>
    </div>
  `;
});

// Pantalla negativa
btnNo.addEventListener("click", () => {
  pantalla.innerHTML = `
    <img src="como que no.gif" alt="como que no" class="gif">
    <h1>¿De veritas? </h1>
    <div class="btn">
      <button id="btn-si2">Sí lo quiero</button>
      <button id="btn-no2">No lo quiero</button>
    </div>
  `;

  // Reasignar botones nuevos
  const btnSi2 = document.getElementById("btn-si2");
  const btnNo2 = document.getElementById("btn-no2");

  btnSi2.addEventListener("click", () => {
    pantalla.innerHTML = `
      <img src="abrazo.gif" alt="abrazo" class="gif">
      <h1>¡Abrazo virtual enviado con todo mi cariño! 💖</h1>
      <p>Que este abrazo te recuerde lo especial que eres 🌟</p>
    `;
  });

  btnNo2.addEventListener("mouseenter", (e) => {
    moverAleatoriamente(e.target);
    sonido.play();
  });

});
