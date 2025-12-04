let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
function adivinar() {
 let numeroAdivinado = parseInt(document.getElementById('numero-adivinado').value);
 let mensaje = document.getElementById('mensaje');
 intentos++;
 if (numeroAdivinado === numeroSecreto) {
 mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
 } else if (numeroAdivinado > numeroSecreto) {
 mensaje.textContent = 'El número es más pequeño.';
 } else if (numeroAdivinado < numeroSecreto) {
 mensaje.textContent = 'El número es más grande.';
 }
}
function reiniciar() {
 numeroSecreto = Math.floor(Math.random() * 100) + 1;
 intentos = 0;
 document.getElementById('mensaje').textContent = '';
 document.getElementById('numero-adivinado').value = '';
}