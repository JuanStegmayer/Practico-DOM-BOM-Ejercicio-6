let tiempoRestante;
let temporizador;
let pausado = false;

function iniciarTemporizador() {
  if (pausado) {
    pausado = false;
    return;
  }
  let inputTiempo = document.getElementById("tiempo").value;
  tiempoRestante = parseInt(inputTiempo, 10);
  displayTiempo();
  temporizador = setInterval(function () {
    if (tiempoRestante > 0) {
      tiempoRestante--;
      displayTiempo();
    } else {
      clearInterval(temporizador);
      alert("¡Tiempo terminado!");
    }
  }, 1000);
}

function pausarTemporizador() {
  pausado = true;
  clearInterval(temporizador);
}

function resetearTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = 0;
  displayTiempo();
}

function displayTiempo() {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  document.getElementById("display").innerText =
    String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0");
}
